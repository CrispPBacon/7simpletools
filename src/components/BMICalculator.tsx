import React, { useState, ChangeEvent } from "react";

const styles = {
  container: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "2.5rem 3rem",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: 320,
    textAlign: "center" as const,
    transition: "background 0.3s ease",
    fontFamily: "'Poppins', sans-serif",
    color: "#fff",
  },
  containerHover: {
    background: "rgba(255, 255, 255, 0.15)",
  },
  heading: {
    marginBottom: "1rem",
    fontWeight: 600,
    fontSize: "2rem",
    letterSpacing: "1.2px",
  },
  paragraph: {
    marginTop: 0,
    marginBottom: "2rem",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: "black",
  },
  label: {
    display: "block",
    textAlign: "left" as const,
    fontWeight: 500,
    marginBottom: "0.4rem",
    fontSize: "0.9rem",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.8rem",
    marginBottom: "1.4rem",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 500,
    boxSizing: "border-box" as const,
    color: "black",
  },
  inputFocus: {
    outline: "none",
    boxShadow: "0 0 8px #764ba2",
  },
  button: {
    backgroundColor: "#764ba2",
    color: "white",
    border: "none",
    padding: "0.8rem 0",
    width: "100%",
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#667eea",
  },
  result: {
    marginTop: "1.8rem",
    fontSize: "1.3rem",
    fontWeight: 600,
    padding: "0.8rem 1rem",
    borderRadius: "12px",
    background: "rgba(118, 75, 162, 0.3)",
    minHeight: 48,
    color: "purple",
  },
  status: {
    marginTop: "0.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    minHeight: 24,
    color: "black",
  },
};

const BmiCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [weightFocused, setWeightFocused] = useState<boolean>(false);
  const [heightFocused, setHeightFocused] = useState<boolean>(false);
  const [buttonHover, setButtonHover] = useState<boolean>(false);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || weightNum <= 0) {
      setBmi("");
      setStatus("Please enter a valid weight.");
      return;
    }
    if (!heightNum || heightNum <= 0) {
      setBmi("");
      setStatus("Please enter a valid height.");
      return;
    }

    const heightM = heightNum / 100;
    const bmiVal = weightNum / (heightM * heightM);
    const roundedBmi = bmiVal.toFixed(1);

    setBmi(`Your BMI is ${roundedBmi}`);

    if (bmiVal < 18.5) {
      setStatus("Underweight");
    } else if (bmiVal >= 18.5 && bmiVal < 25) {
      setStatus("Normal weight");
    } else if (bmiVal >= 25 && bmiVal < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculateBMI();
    }
  };

  return (
    <section className="page-section flex-center flex--column">
      <div>
        <div
          style={{
            ...styles.container,
            ...(buttonHover ? styles.containerHover : {}),
          }}
          role="main"
          aria-label="BMI Calculator"
        >
          <h1 style={styles.heading}>BMI Calculator</h1>
          <p style={styles.paragraph}>
            Enter your weight and height to calculate your Body Mass Index.
          </p>

          <label htmlFor="weight" style={styles.label}>
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            min={1}
            step={0.1}
            placeholder="e.g. 70"
            aria-describedby="weightHelp"
            value={weight}
            onChange={handleWeightChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setWeightFocused(true)}
            onBlur={() => setWeightFocused(false)}
            style={{
              ...styles.input,
              ...(weightFocused ? styles.inputFocus : {}),
            }}
          />

          <label htmlFor="height" style={styles.label}>
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            min={30}
            step={0.1}
            placeholder="e.g. 175"
            aria-describedby="heightHelp"
            value={height}
            onChange={handleHeightChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setHeightFocused(true)}
            onBlur={() => setHeightFocused(false)}
            style={{
              ...styles.input,
              ...(heightFocused ? styles.inputFocus : {}),
            }}
          />

          <button
            id="calculateBtn"
            onClick={calculateBMI}
            aria-label="Calculate BMI"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{
              ...styles.button,
              ...(buttonHover ? styles.buttonHover : {}),
            }}
          >
            Calculate BMI
          </button>

          <div
            id="bmiResult"
            role="region"
            aria-live="polite"
            aria-atomic="true"
            style={styles.result}
          >
            {bmi}
          </div>
          <div id="bmiStatus" style={styles.status}>
            {status}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
