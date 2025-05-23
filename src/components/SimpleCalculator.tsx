import { useState } from "react";

function SimpleCalculator() {
  const [result, setResult] = useState("");

  const appendValue = (value: string) => {
    setResult((prev) => prev + value);
  };

  const clearResult = () => {
    setResult("");
  };

  const calculateResult = () => {
    try {
      const evaluated = eval(result);
      setResult(evaluated.toString());
    } catch (error) {
      alert("Invalid expression");
      console.log(error);
      clearResult();
    }
  };

  return (
    <section className="page-section flex-center flex--column">
      <h2>Simple Calculator</h2>
      <div className="calculator">
        <input type="text" id="result" value={result} readOnly />
        <br />
        {[
          ["7", "8", "9", "/"],
          ["4", "5", "6", "*"],
          ["1", "2", "3", "-"],
          ["0", ".", "C", "+"],
        ].map((row, i) => (
          <div key={i}>
            {row.map((char) =>
              char === "C" ? (
                <button
                  className="btn-cal clear"
                  onClick={clearResult}
                  key={char}
                >
                  {char}
                </button>
              ) : (
                <button
                  className={`btn-cal ${
                    ["/", "*", "-", "+"].includes(char) ? "operator" : ""
                  }`}
                  onClick={() => appendValue(char)}
                  key={char}
                >
                  {char}
                </button>
              )
            )}
            <br />
          </div>
        ))}
        <button className="btn-cal equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </section>
  );
}

export default SimpleCalculator;
