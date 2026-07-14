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

    if (!process.env.RESEND_API_KEY) {
      console.error("[ERRO] RESEND_API_KEY não está configurada na Vercel");
      return NextResponse.json({ error: "Serviço de e-mail não configurado. Contate o administrador." }, { status: 500 });
    }

    if (!resend) {
      console.error("[ERRO] Resend não foi inicializado com sucesso");
      return NextResponse.json({ error: "Serviço de e-mail indisponível." }, { status: 500 });
    }

    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL ?? "isaac.lopesalencar@gmail.com";

    console.log("[INFO] Enviando e-mail com FROM:", from, "TO:", to);

    const escapedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const escapedEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const escapedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />");

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato do portfólio: ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; background-color: #0a0a0b; padding: 32px; color: #f5f5f0;">
          <div style="max-width: 640px; margin: 0 auto; background: #111113; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
            <div style="background: linear-gradient(135deg, #c8f06e 0%, #a7db4f 100%); padding: 24px 32px;">
              <h1 style="margin: 0; font-size: 24px; color: #0a0a0b; font-family: 'Syne', Arial, sans-serif;">Novo contato recebido</h1>
              <p style="margin: 8px 0 0; color: #1f2513; font-size: 14px;">Mensagem enviada pelo formulário do seu portfólio</p>
            </div>

            <div style="padding: 32px;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #8b8b8b;">
                Você recebeu uma nova mensagem de contato. Abaixo estão os detalhes:
              </p>

              <div style="background: #18181b; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #8b8b8b;">Nome</p>
                <p style="margin: 0; font-size: 16px; color: #f5f5f0; font-weight: 600;">${escapedName}</p>
              </div>

              <div style="background: #18181b; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #8b8b8b;">E-mail</p>
                <p style="margin: 0; font-size: 16px; color: #f5f5f0; font-weight: 600;">${escapedEmail}</p>
              </div>

              <div style="background: #18181b; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
                <p style="margin: 0 0 8px; font-size: 14px; color: #8b8b8b;">Mensagem</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #f5f5f0;">${escapedMessage}</p>
              </div>

              <a href="mailto:${escapedEmail}" style="display: inline-block; background: #c8f06e; color: #0a0a0b; text-decoration: none; padding: 12px 20px; border-radius: 999px; font-weight: 700;">
                Responder por e-mail
              </a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[ERRO] Ao enviar e-mail:", err);
    const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
    return NextResponse.json({ error: `Erro interno: ${errorMessage}` }, { status: 500 });
  }
}
