import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const login = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <nav style={{ padding: "10px", background: "#000", color: "#fff" }}>
      <span style={{ marginRight: "20px" }}>Cloutline</span>
      {user ? (
        <>
          <span>{user.displayName}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </nav>
  );
}
