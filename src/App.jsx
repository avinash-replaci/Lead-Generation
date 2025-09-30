import React from "react";
import WhatsAppQR from "./WhatsAppQR";
import "./App.css"; // import styles for the app wrapper

export default function App() {
  return (
    <div className="app-wrap">
      <WhatsAppQR
        phone="919389780676"
        campaignCode="DIWALI_2025"
        serverBase="http://localhost:4000"
        size={300}
      />
    </div>
  );
}
