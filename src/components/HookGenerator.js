import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HookGenerator() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const generateHook = () => {
    if (!topic.trim()) return;
    const hook = `🔥 ${topic} is the next big thing! 🚀`;
    navigate("/result", { state: { hook } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Hook Generator
        </h1>
        <input
          type="text"
          placeholder="Enter your topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={generateHook}
          className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Generate Hook
        </button>
      </div>
    </div>
  );
}
