import React, { useState } from "react";

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>(""); // in kg
  const [height, setHeight] = useState<string>(""); // in cm
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

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
    heading: {
      marginBottom: 24,
      color: "#333",
    },
    input: {
      width: "100%",
      padding: 10,
      marginBottom: 15,
      fontSize: 16,
      borderRadius: 6,
      border: "1px solid #ccc",
      boxSizing: "border-box" as const,
      color: "black",
    },
    button: {
      padding: "12px 20px",
      fontSize: 16,
      borderRadius: 6,
      border: "none",
      backgroundColor: "#4CAF50",
      color: "white",
      cursor: "pointer",
      width: "100%",
      marginTop: 10,
    },
    result: {
      marginTop: 20,
      fontWeight: "600",
      fontSize: 18,
      color: "#222",
    },
    message: {
      marginTop: 8,
      fontSize: 16,
      color: "#555",
    },
  };

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setBmi(null);
      setMessage("Please enter valid positive numbers for weight and height.");
      return;
    }

    // Height in meters
    const heightMeters = h / 100;
    const bmiValue = w / (heightMeters * heightMeters);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setMessage("You are underweight.");
    else if (bmiValue < 24.9) setMessage("You have a normal weight.");
    else if (bmiValue < 29.9) setMessage("You are overweight.");
    else setMessage("You are obese.");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={styles.input}
        min="0"
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        style={styles.input}
        min="0"
      />
      <button onClick={calculateBMI} style={styles.button}>
        Calculate BMI
      </button>

      {bmi !== null && (
        <div style={styles.result}>
          Your BMI: {bmi.toFixed(2)}
          <p style={styles.message}>{message}</p>
        </div>
      )}
      {bmi === null && message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default BMICalculator;
