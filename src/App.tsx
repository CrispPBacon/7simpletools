import React from "react";
import "./css/index.css";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("./components/Main"));

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const BaseConverter = React.lazy(() => import("./components/BaseConverter"));
const UnitConverter = React.lazy(() => import("./components/UnitConverter"));
const BMICalculator = React.lazy(() => import("./components/BMICalculator"));
const QRCodeGenerator = React.lazy(
  () => import("./components/QRCodeGenerator")
);
const CurrencyConverter = React.lazy(
  () => import("./components/CurrencyConverter")
);
const PasswordGenerator = React.lazy(
  () => import("./components/PasswordGenerator")
);
const SimpleCalculator = React.lazy(
  () => import("./components/SimpleCalculator")
);

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/base-converter" element={<BaseConverter />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/unit-converter" element={<UnitConverter />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/qr-code-generator" element={<QRCodeGenerator />} />
      </Route>
    </Routes>
  );
}

export default App;
