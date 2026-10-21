import { NextResponse } from "next/server";

// Temporary: reports whether the SMTP env vars reached the deployment.
// Never returns the values themselves. Delete once the form is confirmed.
export async function GET() {
  const names = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "SMTP_FROM",
    "CONTACTO_TO",
  ];

  const report: Record<string, string> = {};
  for (const n of names) {
    const v = process.env[n];
    report[n] = v ? `set (${v.length} chars)` : "MISSING";
  }

  return NextResponse.json(report);
}
