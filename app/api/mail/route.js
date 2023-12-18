import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";


export async function POST(request) {

  if (request.method === "POST") {
    const body = await request.json()
    // console.log(body)

    if (!body.email || !body.fullname || !body.message) {
      return NextResponse.json({ error: 'Bad request' })

    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Message from Assistivteq website",
        text: ` 
          Full Name: ${body.fullname} \n 
          Email:${body.email} \n 
          Message: ${body.message} \n 
          This message was sent from Glidex Technologies website
          `
      })
      return NextResponse.json({ message: "This Worked", success: true });
    } catch (error) {
      console.log(error)
    }
  }
  return NextResponse.json({ message: "This Worked", success: true });
}

export async function GET(request) {
  return NextResponse.json({ error: 'Unauthorized Access' })
}

 
