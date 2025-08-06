import React from "react";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { hook } = location.state || { hook: "No hook generated" };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Generated Hook</h2>
      <p>{hook}</p>
    </div>
  );
}
