import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section id="home" className="page-section flex-center flex--column">
      <h1>Useful tools</h1>
      <p>
        Designed to help with calculations, conversions, and daily tasks in one
        place!
      </p>
      <div className="tools-grid">
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient"
          onClick={() => navigate("/base-converter")}
        >
          <h6>Converter</h6>
          <span className="material-symbols-outlined"> cached </span>
          <p>0110101</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-2"
          onClick={() => navigate("/simple-calculator")}
        >
          <h6>Calculator</h6>
          <span className="material-symbols-outlined"> calculate </span>
          <p>3 + 2 - 1 x 5</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-3"
          onClick={() => navigate("/password-generator")}
        >
          <h6>Password</h6>
          <span className="material-symbols-outlined"> key </span>
          <p>Generator</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-4"
          onClick={() => navigate("/bmi-calculator")}
        >
          <h6>BMI</h6>
          <span className="material-symbols-outlined"> scale </span>
          <p>Calculator</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-5"
          onClick={() => navigate("/unit-converter")}
        >
          <h6>Unit</h6>
          <span className="material-symbols-outlined"> square_foot </span>
          <p>Converter</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-6"
          onClick={() => navigate("/currency-converter")}
        >
          <h6>Currency</h6>
          <span className="material-symbols-outlined"> currency_exchange </span>
          <p>Converter</p>
        </div>
        <div
          className="tools-grid-item light-shadow flex-center flex--column gradient-7"
          onClick={() => navigate("/qr-code-generator")}
        >
          <h6>QR Code</h6>
          <span className="material-symbols-outlined"> qr_code_scanner </span>
          <p>Generator</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
