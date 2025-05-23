import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>("");

  const styles = {
    container: {
      maxWidth: 400,
      margin: "40px auto",
      padding: 30,
      borderRadius: 12,
      backgroundColor: "#fff",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      textAlign: "center" as const,
    },
    input: {
      width: "100%",
      padding: 12,
      fontSize: 16,
      borderRadius: 6,
      border: "1px solid #ccc",
      marginBottom: 20,
      color: "black",
      boxSizing: "border-box" as const,
    },
    qrCodeWrapper: {
      marginTop: 20,
      display: "inline-block",
      padding: 16,
      backgroundColor: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    label: {
      marginBottom: 8,
      display: "block",
      fontWeight: 600,
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <label htmlFor="qr-input" style={styles.label}>
        Enter text or URL to generate QR code:
      </label>
      <input
        id="qr-input"
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      {text && (
        <div style={styles.qrCodeWrapper}>
          <QRCodeCanvas value={text} size={200} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
