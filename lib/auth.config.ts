import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/zod";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import { NextAuthConfig } from "next-auth";

const publicRoutes = ["/sign-in", "/sign-up"];
const authRoutes = ["/sign-in", "/sign-up"];

export default {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                const parsedCredentials = signInSchema.safeParse(credentials);
                if (!parsedCredentials.success) {
                    console.error("Invalid credentials:", parsedCredentials.error.errors);
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string,
                    },
                });

                if (!user) {
                    console.log("Invalid credentials");
                    return null;
                }

                // Compare passwords
                const isPasswordValid = await bcryptjs.compare(credentials.password as string, user.password);
                if (!isPasswordValid) {
                    console.log("Invalid password");
                    return null;
                }

                return { id: user.id, email: user.email, role: user.role };
            }
        })
    ],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;

            if (publicRoutes.includes(pathname)) {
                return true;
            }

            if (authRoutes.includes(pathname)) {
                if (isLoggedIn) {
                    return Response.redirect(new URL('/', nextUrl));
                }
                return true;
            }

            return isLoggedIn;
        },
        jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id as string;
                token.role = user.role as string;
            }
            if (trigger === "update" && session) {
                token = { ...token, ...session };
            }
            return token;
        },
        session({ session, token }) {
            session.user.id = token.id;
            session.user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: "/sign-in"
    }
} satisfies NextAuthConfig;