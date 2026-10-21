import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACTO } from "@/data/content";

// Recipient. CONTACTO_TO points at a test inbox during development; with it
// unset the form goes to the address the document specifies.
const TO = process.env.CONTACTO_TO || CONTACTO.email;

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

// The SMTP account is only the transport. It is deliberately separate from
// TO, which is the inbox UNGE actually reads.
const FROM = process.env.SMTP_FROM || `UNGE <${SMTP_USER}>`;

const MOTIVOS = new Set(CONTACTO.motivos);

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = clean(form.get("nombre"), 120);
  const organizacion = clean(form.get("organizacion"), 120);
  const email = clean(form.get("email"), 160);
  const telefono = clean(form.get("telefono"), 60);
  const motivo = clean(form.get("motivo"), 60);
  const mensaje = clean(form.get("mensaje"), 4000);
  const privacidad = form.get("privacidad");

  // The browser already enforces these; re-check so the endpoint cannot be
  // posted to directly with half a form.
  if (!nombre || !email || !motivo || !mensaje) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Correo electrónico inválido." }, { status: 400 });
  }
  if (!MOTIVOS.has(motivo)) {
    return NextResponse.json({ error: "Motivo de contacto inválido." }, { status: 400 });
  }
  if (!privacidad) {
    return NextResponse.json(
      { error: "Es necesario aceptar la política de privacidad." },
      { status: 400 }
    );
  }

  // Config is checked after validation so a malformed post still gets the
  // field error it deserves rather than a server error.
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("[contacto] SMTP_USER / SMTP_PASS no están configuradas");
    return NextResponse.json(
      { error: "El envío de correo no está configurado." },
      { status: 500 }
    );
  }

  const rows: [string, string][] = [
    ["Nombre y apellido", nombre],
    ["Organización", organizacion || "—"],
    ["Correo electrónico", email],
    ["Teléfono", telefono || "—"],
    ["Motivo de contacto", motivo],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Mensaje:",
    mensaje,
    "",
    "—",
    "Enviado desde el formulario de contacto de unge.ar",
  ].join("\n");

  const html = `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#1d1d1b">
  <div style="background:#0d1722;padding:24px 28px">
    <p style="margin:0;color:#b7c6dd;font-size:11px;letter-spacing:.18em;text-transform:uppercase">UNGE · Formulario de contacto</p>
    <p style="margin:8px 0 0;color:#fff;font-size:20px;font-weight:600">${escapeHtml(motivo)}</p>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-top:4px">
    ${rows
      .map(
        ([k, v]) => `
    <tr>
      <td style="padding:12px 28px;border-bottom:1px solid #e6e8ec;width:190px;color:#6b7280;font-size:12px;letter-spacing:.08em;text-transform:uppercase;vertical-align:top">${escapeHtml(k)}</td>
      <td style="padding:12px 28px;border-bottom:1px solid #e6e8ec;font-size:15px">${escapeHtml(v)}</td>
    </tr>`
      )
      .join("")}
  </table>

  <div style="padding:20px 28px">
    <p style="margin:0 0 8px;color:#6b7280;font-size:12px;letter-spacing:.08em;text-transform:uppercase">Mensaje</p>
    <p style="margin:0;font-size:15px;line-height:1.65;white-space:pre-wrap">${escapeHtml(mensaje)}</p>
  </div>

  <div style="padding:16px 28px;border-top:1px solid #e6e8ec;color:#959596;font-size:12px">
    Enviado desde el formulario de contacto de unge.ar
  </div>
</div>`.trim();

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: `${nombre} <${email}>`,
      subject: `Contacto UNGE · ${motivo} · ${nombre}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto] fallo el envío:", err);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
  }
}
