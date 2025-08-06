import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HookGenerator() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const generateHook = () => {
    if (!topic.trim()) return;
    const hook = `🔥 ${topic} is the next big thing!`;
    navigate("/result", { state: { hook } });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Hook Generator</h1>
      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={generateHook}
        style={{
          padding: "10px 15px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate Hook
      </button>
    </div>
  );
}
