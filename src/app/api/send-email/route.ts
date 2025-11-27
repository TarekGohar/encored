import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Submission {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  submittedAt: string;
}

interface SubmissionsDB {
  submissions: Submission[];
}

const DB_PATH = path.join(process.cwd(), "public", "data", "submissions.json");

function readDB(): SubmissionsDB {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return { submissions: [] };
  }
}

function writeDB(data: SubmissionsDB): void {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, company, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new submission
    const newSubmission: Submission = {
      id: generateId(),
      name,
      company: company || "",
      email,
      phone,
      projectType,
      message,
      submittedAt: new Date().toISOString(),
    };

    // Read existing data, add new submission, and write back
    const db = readDB();
    db.submissions.push(newSubmission);
    writeDB(db);

    return NextResponse.json(
      { success: true, id: newSubmission.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving submission:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = readDB();
    return NextResponse.json(db, { status: 200 });
  } catch (error) {
    console.error("Error reading submissions:", error);
    return NextResponse.json(
      { error: "Failed to read submissions" },
      { status: 500 }
    );
  }
}

