"use client";
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; type: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, type: "user" }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { text: data.reply, type: "bot" }]);

    setInput("");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white p-4 shadow-lg rounded-md border">
          <div className="h-64 overflow-y-auto border-b mb-2 p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-md ${
                  msg.type === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l-md"
            />
            <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-r-md">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
