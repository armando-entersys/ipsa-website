import { Resend } from "resend";
import { NextResponse } from "next/server";

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, company, email, phone, industry, queryType, message, locale } = body;
    const lang = locale === "en" ? "en" : "es";

    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const contactEmail = "armando.cortes@scram2k.com";
    const fromAddress =
      process.env.RESEND_FROM || "IPSA Web <onboarding@resend.dev>";

    const industryLabels: Record<string, string> = {
      oil: "Oil & Gas",
      oils: "Petroquímica / Refinación",
      gas: "Energético",
      other: "Otro",
    };

    const queryLabels: Record<string, string> = {
      quote: "Cotización",
      support: "Soporte técnico",
      info: "Información general",
      project: "Proyecto / Ingeniería",
    };

    const n = esc(name);
    const c = esc(company);
    const e = esc(email);
    const p = esc(phone);
    const ind = industry ? esc(industryLabels[industry] || industry) : "";
    const qt = queryType ? esc(queryLabels[queryType] || queryType) : "";
    const msg = message ? esc(message).replace(/\n/g, "<br/>") : "";

    // 1. Internal notification email
    await resend.emails.send({
      from: fromAddress,
      to: [contactEmail],
      replyTo: email,
      subject: `[IPSA Web] Nueva consulta: ${n} - ${c}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e3a5f;padding:24px;border-radius:12px 12px 0 0">
            <h1 style="color:#c8922a;margin:0;font-size:20px">Nueva consulta desde el sitio web</h1>
          </div>
          <div style="background:#f8f9fa;padding:24px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;width:140px;vertical-align:top">Nombre:</td>
                <td style="padding:8px 12px">${n}</td>
              </tr>
              <tr style="background:white">
                <td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Empresa:</td>
                <td style="padding:8px 12px">${c}</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Email:</td>
                <td style="padding:8px 12px"><a href="mailto:${e}">${e}</a></td>
              </tr>
              <tr style="background:white">
                <td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Teléfono:</td>
                <td style="padding:8px 12px">${p}</td>
              </tr>
              ${ind ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Industria:</td><td style="padding:8px 12px">${ind}</td></tr>` : ""}
              ${qt ? `<tr style="background:white"><td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Tipo:</td><td style="padding:8px 12px">${qt}</td></tr>` : ""}
              ${msg ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#1e3a5f;vertical-align:top">Mensaje:</td><td style="padding:8px 12px">${msg}</td></tr>` : ""}
            </table>
          </div>
          <p style="color:#999;font-size:12px;margin-top:16px;text-align:center">Enviado desde ipsacv.com.mx | Idioma: ${lang}</p>
        </div>`,
    });

    // 2. Confirmation email to client (in their language)
    const confirmSubject = lang === "en"
      ? `IPSA - We received your inquiry`
      : `IPSA - Recibimos su solicitud`;

    const confirmHtml = lang === "en"
      ? `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e3a5f;padding:24px;border-radius:12px 12px 0 0;text-align:center">
            <img src="https://ipsacv.com.mx/images/logos/ipsa-logo.png" alt="IPSA" style="height:40px" />
          </div>
          <div style="background:#f8f9fa;padding:32px;border-radius:0 0 12px 12px">
            <h2 style="color:#1e3a5f;margin:0 0 16px">Thank you, ${n}!</h2>
            <p style="color:#333;line-height:1.6;margin:0 0 16px">We have received your inquiry and our team will review it shortly. A specialist will contact you within <strong>24 business hours</strong>.</p>
            <div style="background:white;border-left:4px solid #c8922a;padding:16px;border-radius:8px;margin:16px 0">
              <p style="color:#666;margin:0;font-size:14px"><strong>Company:</strong> ${c}</p>
              ${qt ? `<p style="color:#666;margin:4px 0 0;font-size:14px"><strong>Inquiry type:</strong> ${qt}</p>` : ""}
              ${msg ? `<p style="color:#666;margin:4px 0 0;font-size:14px"><strong>Message:</strong> ${msg}</p>` : ""}
            </div>
            <p style="color:#333;line-height:1.6;margin:16px 0 0">If you need immediate assistance, contact us at <a href="tel:+525553973703" style="color:#1e3a5f;font-weight:bold">+52 55 5397 3703</a> or via <a href="https://wa.me/5215541886380" style="color:#25D366;font-weight:bold">WhatsApp</a>.</p>
          </div>
          <p style="color:#999;font-size:11px;margin-top:16px;text-align:center">IPSA - Instrumentaci&oacute;n y Proyectos S.A. de C.V. | ipsacv.com.mx</p>
        </div>`
      : `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#1e3a5f;padding:24px;border-radius:12px 12px 0 0;text-align:center">
            <img src="https://ipsacv.com.mx/images/logos/ipsa-logo.png" alt="IPSA" style="height:40px" />
          </div>
          <div style="background:#f8f9fa;padding:32px;border-radius:0 0 12px 12px">
            <h2 style="color:#1e3a5f;margin:0 0 16px">Gracias, ${n}!</h2>
            <p style="color:#333;line-height:1.6;margin:0 0 16px">Hemos recibido su solicitud y nuestro equipo la revisar&aacute; en breve. Un especialista se pondr&aacute; en contacto con usted en un m&aacute;ximo de <strong>24 horas h&aacute;biles</strong>.</p>
            <div style="background:white;border-left:4px solid #c8922a;padding:16px;border-radius:8px;margin:16px 0">
              <p style="color:#666;margin:0;font-size:14px"><strong>Empresa:</strong> ${c}</p>
              ${qt ? `<p style="color:#666;margin:4px 0 0;font-size:14px"><strong>Tipo de consulta:</strong> ${qt}</p>` : ""}
              ${msg ? `<p style="color:#666;margin:4px 0 0;font-size:14px"><strong>Mensaje:</strong> ${msg}</p>` : ""}
            </div>
            <p style="color:#333;line-height:1.6;margin:16px 0 0">Si requiere atenci&oacute;n inmediata, cont&aacute;ctenos al <a href="tel:+525553973703" style="color:#1e3a5f;font-weight:bold">+52 55 5397 3703</a> o por <a href="https://wa.me/5215541886380" style="color:#25D366;font-weight:bold">WhatsApp</a>.</p>
          </div>
          <p style="color:#999;font-size:11px;margin-top:16px;text-align:center">IPSA - Instrumentaci&oacute;n y Proyectos S.A. de C.V. | ipsacv.com.mx</p>
        </div>`;

    const confirmResult = await resend.emails.send({
      from: fromAddress,
      to: [email],
      replyTo: contactEmail,
      subject: confirmSubject,
      html: confirmHtml,
    });
    console.log("Confirmation email result:", JSON.stringify(confirmResult));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
