import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    // Log the contact for now (in production, integrate with email service like Resend or Nodemailer)
    console.log("📬 Nova mensagem de contato:", { name, email, message, timestamp: new Date().toISOString() });

    // TODO: Integrate with Resend, Nodemailer, or any email provider
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: 'onboarding@resend.dev', to: 'contato.isaac.lopesalencar@gmail.com', subject: `Portfolio: ${name}`, text: message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
