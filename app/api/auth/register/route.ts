import { connectToDatabase } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Connect to the database
    const db = await connectToDatabase();

    // Validate input
    if (!name || !email || !password) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}