import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  const girisYap = () => {
    if (email.includes("@")) {
      onLogin({ email });
    } else {
      alert("info@ozcanaskilari.com");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Özcan Askı Giriş</h1>
      <input
        type="email"
        placeholder="E-posta adresi"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 rounded w-72"
      />
      <button
        onClick={girisYap}
        className="bg-black text-white px-4 py-2 rounded w-72"
      >
        Giriş Yap
      </button>
    </div>
  );
}
