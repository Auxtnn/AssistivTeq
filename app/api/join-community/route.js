import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../config/nodemailer";


export  async function POST(request) {
  const body = request.json()

  const {
    email,
    fullname,
    number,
    disabilityType,
    message
  } = body

  if (!fullname && !email && !number) {
    return NextResponse.json({ error: 'Bad request', status: 500 })
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Message from Assistivteq Community",
      text: ` 
        Full Name: ${fullname} \n 
        Email:${email} \n 
        Number: ${number} \n 
        Disability Type: ${disabilityType} \n 
        Message: ${message} \n 
        This message was sent from AssistivTeq Community
        `
    })
    return NextResponse.json({ message: "This Worked", success: true });
  } catch (error) {
    console.log(error)
  }
  return NextResponse.json({ message: "This Worked", success: true });
}

export async function GET(request) {
  return NextResponse.json({ error: 'Unauthorized Access' })
}