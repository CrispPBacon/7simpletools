import React, { useState } from "react";

function BaseConverter() {
  const [binary, setBinary] = useState("");
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");

  const updateFromBinary = (value: string) => {
    const clean = value.replace(/[^01]/g, "");
    setBinary(clean);
    if (clean.length > 0) {
      try {
        const dec = parseInt(clean, 2);
        setDecimal(dec.toString());
        setHex(dec.toString(16).toUpperCase());
      } catch {
        setDecimal("");
        setHex("");
      }
    } else {
      setDecimal("");
      setHex("");
    }
  };

  const updateFromHex = (value: string) => {
    const clean = value.replace(/[^0-9a-fA-F]/g, "").toUpperCase();
    setHex(clean);
    if (clean.length > 0) {
      try {
        const dec = parseInt(clean, 16);
        setDecimal(dec.toString());
        setBinary(dec.toString(2));
      } catch {
        setDecimal("");
        setBinary("");
      }
    } else {
      setDecimal("");
      setBinary("");
    }
  };

  const updateFromDecimal = (value: string) => {
    const clean = value.replace(/[^0-9]/g, "");
    setDecimal(clean);
    if (clean.length > 0) {
      try {
        const dec = parseInt(clean, 10);
        setBinary(dec.toString(2));
        setHex(dec.toString(16).toUpperCase());
      } catch {
        setBinary("");
        setHex("");
      }
    } else {
      setBinary("");
      setHex("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Base Converter</h2>

      <label>Binary:</label>
      <input
        type="text"
        value={binary}
        onChange={(e) => updateFromBinary(e.target.value)}
        placeholder="e.g. 1101"
        style={styles.input}
      />

      <label>Hexadecimal:</label>
      <input
        type="text"
        value={hex}
        onChange={(e) => updateFromHex(e.target.value)}
        placeholder="e.g. A1F"
        style={styles.input}
      />

      <label>Decimal:</label>
      <input
        type="text"
        value={decimal}
        onChange={(e) => updateFromDecimal(e.target.value)}
        placeholder="e.g. 255"
        style={styles.input}
      />
    </div>
  );
}

export default BaseConverter;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "350px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    fontSize: "16px",
    color: "black",
  },
};
