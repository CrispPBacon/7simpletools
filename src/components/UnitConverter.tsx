import { useEffect, useState } from "react";

// Types
type Category = "length" | "weight" | "temperature" | "speed";
type UnitMap = { [unit: string]: (v: number) => number };
type ConversionMap = { [category in Category]: { [unit: string]: UnitMap } };

// Units
const unitOptions: Record<Category, string[]> = {
  length: ["meters", "feet", "inches"],
  weight: ["kilograms", "pounds"],
  temperature: ["celsius", "fahrenheit"],
  speed: ["kilometers_per_hour", "miles_per_hour", "knots", "lightspeed"],
};

// Conversion Functions
const conversions: ConversionMap = {
  length: {
    meters: {
      feet: (v) => v * 3.28084,
      inches: (v) => v * 39.3701,
      meters: (v) => v,
    },
    feet: { meters: (v) => v / 3.28084, inches: (v) => v * 12, feet: (v) => v },
    inches: {
      meters: (v) => v / 39.3701,
      feet: (v) => v / 12,
      inches: (v) => v,
    },
  },
  weight: {
    kilograms: { pounds: (v) => v * 2.20462, kilograms: (v) => v },
    pounds: { kilograms: (v) => v / 2.20462, pounds: (v) => v },
  },
  temperature: {
    celsius: { fahrenheit: (v) => (v * 9) / 5 + 32, celsius: (v) => v },
    fahrenheit: { celsius: (v) => ((v - 32) * 5) / 9, fahrenheit: (v) => v },
  },
  speed: {
    kilometers_per_hour: {
      miles_per_hour: (v) => v * 0.621371,
      knots: (v) => v * 0.539957,
      lightspeed: (v) => v / 1079252848.8,
      kilometers_per_hour: (v) => v,
    },
    miles_per_hour: {
      kilometers_per_hour: (v) => v / 0.621371,
      knots: (v) => v * 0.868976,
      lightspeed: (v) => v / 0.621371 / 1079252848.8,
      miles_per_hour: (v) => v,
    },
    knots: {
      kilometers_per_hour: (v) => v / 0.539957,
      miles_per_hour: (v) => v / 0.868976,
      lightspeed: (v) => v / 0.539957 / 1079252848.8,
      knots: (v) => v,
    },
    lightspeed: {
      kilometers_per_hour: (v) => v * 1079252848.8,
      miles_per_hour: (v) => v * 1079252848.8 * 0.621371,
      knots: (v) => v * 1079252848.8 * 0.539957,
      lightspeed: (v) => v,
    },
  },
};

const formatUnit = (unit: string) =>
  unit.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState<string>("meters");
  const [toUnit, setToUnit] = useState<string>("feet");
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const defaultUnit = unitOptions[category][0];
    setFromUnit(defaultUnit);
    setToUnit(defaultUnit);
  }, [category]);

  const convertUnits = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult("Please enter a valid number.");
      return;
    }

    const convertFn = conversions[category][fromUnit][toUnit];
    const converted = convertFn(value).toFixed(2);
    setResult(
      `${value} ${formatUnit(fromUnit)} = ${converted} ${formatUnit(toUnit)}`
    );
  };

  return (
    <div style={styles.converter}>
      <h2>Unit Converter</h2>

      <label>Select Category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as Category)}
        style={styles.input}
      >
        {(Object.keys(unitOptions) as Category[]).map((cat) => (
          <option key={cat} value={cat}>
            {formatUnit(cat)}
          </option>
        ))}
      </select>

      <label>From:</label>
      <select
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
        style={styles.input}
      >
        {unitOptions[category].map((unit) => (
          <option key={unit} value={unit}>
            {formatUnit(unit)}
          </option>
        ))}
      </select>

      <label>To:</label>
      <select
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
        style={styles.input}
      >
        {unitOptions[category].map((unit) => (
          <option key={unit} value={unit}>
            {formatUnit(unit)}
          </option>
        ))}
      </select>

      <label>Value:</label>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />

      <button onClick={convertUnits} style={styles.button}>
        Convert
      </button>
      <p style={styles.result}>{result}</p>
    </div>
  );
}

export default UnitConverter;

const styles: { [key: string]: React.CSSProperties } = {
  converter: {
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    width: "100%",
    padding: "10px",
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },
  result: {
    fontWeight: "bold",
    marginTop: "10px",
  },
};
