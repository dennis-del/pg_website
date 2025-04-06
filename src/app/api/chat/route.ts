import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    console.log("User message:", message);

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await res.json();
    console.log("OpenAI Response:", data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return NextResponse.json({ reply: "Error: Invalid API response" });
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Chatbot API Error:", error);
    return NextResponse.json({ reply: "Error processing your request." });
  }
}
