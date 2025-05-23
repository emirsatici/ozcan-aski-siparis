import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Login from "./Login";
import SiparisSistemiUI from "./SiparisSistemiUI";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [kullanici, setKullanici] = React.useState(null);

  if (!kullanici) {
    return <Login onLogin={setKullanici} />;
  }

  return <SiparisSistemiUI kullanici={kullanici} />;
}

root.render(<App />);
