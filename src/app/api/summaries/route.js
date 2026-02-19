import { NextResponse } from "next/server";
import fs from "node:fs";

const files = {
  progress: "/root/.openclaw/workspace/tmp/evening_progress.md",
  summary: "/root/.openclaw/workspace/tmp/evening_summary.md",
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "progress";
  const path = files[name];

  if (!path) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }

  if (!fs.existsSync(path)) {
    return NextResponse.json({ ok: true, name, content: "No summary file yet. It will appear after the runner writes updates." });
  }

  const stat = fs.statSync(path);
  const content = fs.readFileSync(path, "utf8");
  return NextResponse.json({
    ok: true,
    name,
    updatedAt: stat.mtime.toISOString(),
    content,
  });
}
