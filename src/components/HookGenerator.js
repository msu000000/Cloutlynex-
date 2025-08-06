import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HookGenerator() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();

  const generateHook = () => {
    const hook = `🔥 ${topic} is the next big thing!`;
    navigate("/result", { state: { hook } });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={generateHook}>Generate Hook</button>
    </div>
  );
}
