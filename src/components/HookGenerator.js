import React, { useState } from "react";
import { useRouter } from "next/router";

export default function HookGenerator() {
  const [topic, setTopic] = useState("");
  const router = useRouter();

  const generateHook = () => {
    const hook = `🔥 ${topic} is the next big thing!`;
    router.push(`/result?hook=${encodeURIComponent(hook)}`);
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
