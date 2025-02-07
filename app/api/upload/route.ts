import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/lib/config"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    
    const uploadData = await pinata.upload.file(file,{
      groupId: '0194a326-9077-71c7-8251-2c2d54443dea',
    });
    const fileUrl = `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/files/${uploadData.cid}`;
    return NextResponse.json(fileUrl, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}