import { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = (length = 12) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let passwordVal = "";
    for (let i = 0; i < length; i++) {
      passwordVal += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(passwordVal);
  };

  const copyPassword = () => {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch((err) => {
          alert("Failed to copy password: " + err);
        });
    } else {
      alert("Please generate a password first.");
    }
  };

  return (
    <section className="pwd-gen-gradient page-section flex-center flex--column">
      <div>
        <h2>Password Generator</h2>
        <input type="text" value={password} readOnly />
        <button className="button" onClick={() => generatePassword()}>
          Generate
        </button>
        <button className="button" onClick={copyPassword}>
          Copy
        </button>
      </div>
    </section>
  );
}

export default PasswordGenerator;
