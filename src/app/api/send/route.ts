import { NextRequest } from "next/server";
import { EmailTemplate } from "../../../components/contact/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
type EmailRequest = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  object: string;
};
export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phoneNumber, message, object }: EmailRequest =
      await req.json();

    const { data, error } = await resend.emails.send({
      from: "contact@beausoleil.ma",
      to: [email],
      subject: "Thanks for contacting us!",
      react: EmailTemplate({ fullName, email, phoneNumber, message, object }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
