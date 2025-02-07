"use server";

import { auth, signIn, signOut } from "./auth";
import { signUpSchema } from "@/lib/zod";
import { AuthError } from "next-auth";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";

export async function handleCredentialsSignin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }
    throw error; // Use the error for debugging or logging if needed
  }
}

// Handle GitHub Sign-In
export async function handleGithubSignin() {
  await signIn("github", { redirectTo: "/" });
}

// Handle Sign-Out
export async function handleSignOut() {
  await signOut({ redirectTo: "/sign-in" });
}

// Handle Sign-Up
export async function handleSignUp({
  name,
  email,
  password,
  confirmPassword,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  try {
    const parsedCredentials = signUpSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!parsedCredentials.success) {
      return { success: false, message: "Invalid data." };
    }

    // Check if the email is already taken
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return { success: false, message: "Email already exists. Login to continue." };
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, message: "Account created successfully." };
  } catch (error) {
    console.error("Error creating account:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}

// Handle Password Change
export async function handleChangePassword({
    oldPassword,
    newPassword,
  }: {
    oldPassword: string;
    newPassword: string;
  }) {
    const session = await auth();
  
    if (!session?.user) {
      return { error: "User not found" };
    }
  
    if (!oldPassword || !newPassword) {
      return { error: "Please fill all the fields!" };
    }
  
    try {
      if (newPassword.length < 8) {
        return { error: "Password must be at least 8 characters long" };
      }
  
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
      });
      console.log(user)
  
      if (!user) {
        return { error: "User not found" };
      }
  
      const isMatch = await bcryptjs.compare(oldPassword, user.password);
      if (!isMatch) {
        return { error: "Old password does not match!" };
      }
  
      const hashedNewPassword = await bcryptjs.hash(newPassword, 10);
  
      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: { password: hashedNewPassword },
      });
  
      if (!updatedUser) {
        return { error: "Password not updated" };
      }
  
      return { success: true, message: "Password updated successfully." };
    } catch (error) {
      console.error("Error updating password:", error);
      return { error: "An error occurred while updating the password." };
    }
  }

export const getUser = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return { error: 'User not found' };
  }

  let user;
  try {
    user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    if (!user) {
      return { error: 'User not found' };
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'An error occurred while fetching the user' };
  }

  return { result: user };
};

export async function updateProfile({
    name,
    email,
  }: {
    name: string;
    email: string;
  }) {
    const session = await auth();
  
    if (!session?.user) {
      return { error: "User not found" };
    }
  
    if (!name || !email) {
      return { error: "Please fill all the fields!" };
    }
  
    try {
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      if (existingUser && existingUser.id !== session.user.id) {
        return { error: "Email already in use." };
      }

      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: { name, email },
      });
  
      if (!updatedUser) {
        return { error: "Profile not updated" };
      }

      session.user.name = updatedUser.name;
      session.user.email = updatedUser.email;
  
      return { success: true, message: "Profile updated successfully." };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { error: "An error occurred while updating the profile." };
    }
  }

  export async function addServices(data: FormData) {
    const session = await auth();
  
    if (!session?.user) {
      return { error: "User not found" };
    }
  
    const title = data.get("title") as string;
    const image = data.get("image") as string;
  
    if (!title || !image) {
      return { error: "Please provide both a title and an image." };
    }
  
    try {
      const postDoc = await prisma.service.create({
        data: {
          title,
          image,
          user: {
            connect: {
              id: session.user.id, 
            },
          },
        },
      });
  
      return postDoc.id; 
    } catch (error) {
      console.error("Error adding service:", error);
      return { error: "An unexpected error occurred. Please try again." };
    }
  }
  

export async function getAllServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: 'desc', 
      },
    });

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return { error: "An error occurred while fetching services." };
  }
}

export async function updateService(data: FormData, serviceId: string) {
  const session = await auth();

  if (!session?.user) {
    return { error: "User not found" };
  }

  const title = data.get("title") as string;
  const image = data.get("image") as string;

  if (!title || !image) {
    return { error: "Please provide both a title and an image." };
  }

  try {
    const existingService = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!existingService) {
      return { error: "Service not found" };
    }

    if (existingService.userId !== session.user.id) {
      return { error: "You are not authorized to update this service." };
    }

    const updatedService = await prisma.service.update({
      where: { id: serviceId },
      data: {
        title,
        image,
      },
    });

    return updatedService;
  } catch (error) {
    console.error("Error updating service:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
