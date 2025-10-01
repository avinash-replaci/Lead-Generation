import React from "react";
import WhatsAppQR from "./WhatsAppQR";
import "./App.css"; // import styles for the app wrapper

export default function App() {
  return (
    <div className="app-wrap">
      <WhatsAppQR
        phone="15551771495"
        serverBase="http://localhost:4000"
        size={300}
      />
    </div>
  );
}
