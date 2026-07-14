import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Formato inválido." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 500 });
    }

    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL ?? "isaac.lopesalencar@gmail.com";

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato do portfólio: ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return NextResponse.json({ error: "Erro interno ao enviar a mensagem." }, { status: 500 });
  }
}
