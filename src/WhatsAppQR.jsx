import React, { useMemo } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./WhatsAppQR.css"; 

const digitsOnly = (s) => String(s || "").replace(/[^\d]/g, "");

export default function WhatsAppQR({
  phone = "919389780676",           // your WhatsApp number
  campaignCode = "POSTER_A",        // tracking code
  serverBase = "https://deborah-iii-gamma-montana.trycloudflare.com", // server base
  size = 300,
}) {
  const url = useMemo(() => {
    const p = digitsOnly(phone);
    if (!p) return "";
    const uploadLink = `${serverBase}/u?c=${encodeURIComponent(campaignCode)}`;
    const text = `Hi! code=${campaignCode} Upload: ${uploadLink}`;
    return `https://wa.me/${p}?text=${encodeURIComponent(text)}`;
  }, [phone, campaignCode, serverBase]);

  if (!url) return <p>Invalid phone</p>;

  return (
    <div className="qr-wrap">
      <QRCodeCanvas value={url} size={size} includeMargin />
      <div className="qr-sub">Scan with WhatsApp to start chat</div>
      <div className="qr-url">{url}</div>
    </div>
  );
}
