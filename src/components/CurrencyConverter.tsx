import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter: React.FC = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  const apiKey = "65cc3552488a9f9270db2156"; // Replace with your actual API key

  useEffect(() => {
    // Fetch list of currencies
    axios
      .get(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
      .then((response) => {
        setCurrencies(response.data.supported_codes);
      })
      .catch((error) => {
        console.error("Error fetching currency codes:", error);
      });
  }, [apiKey]);

  useEffect(() => {
    // Fetch exchange rate
    if (fromCurrency && toCurrency) {
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
        )
        .then((response) => {
          const rate = response.data.conversion_rates[toCurrency];
          setExchangeRate(rate);
          setConvertedAmount(amount * rate);
        })
        .catch((error) => {
          console.error("Error fetching exchange rate:", error);
        });
    }
  }, [fromCurrency, toCurrency, amount, apiKey]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setAmount(value);
    setConvertedAmount(value * exchangeRate);
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value);
  };

  const styles = {
    container: {
      maxWidth: 500,
      margin: "40px auto",
      padding: 30,
      borderRadius: 12,
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
    heading: {
      textAlign: "center" as const,
      marginBottom: 24,
      color: "#333",
    },
    controls: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 12,
      marginBottom: 20,
    },
    input: {
      padding: 10,
      fontSize: 16,
      borderRadius: 6,
      border: "1px solid #ccc",
      width: "100%",
      boxSizing: "border-box" as const,
      color: "black",
    },
    select: {
      padding: 10,
      fontSize: 16,
      borderRadius: 6,
      border: "1px solid #ccc",
      width: "100%",
      boxSizing: "border-box" as const,
    },
    toSpan: {
      textAlign: "center" as const,
      fontWeight: "bold" as const,
      padding: "8px 0",
    },
    result: {
      textAlign: "center" as const,
      fontSize: 18,
      fontWeight: "600" as const,
      color: "#222",
    },
    exchangeRate: {
      textAlign: "center" as const,
      fontSize: 14,
      color: "#555",
      marginTop: 8,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Currency Converter</h1>
      <div style={styles.controls}>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="0"
          style={styles.input}
        />
        <select
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          style={styles.select}
        >
          {currencies.map(([code, name]) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>
        <span style={styles.toSpan}>to</span>
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}
          style={styles.select}
        >
          {currencies.map(([code, name]) => (
            <option key={code} value={code}>
              {name} ({code})
            </option>
          ))}
        </select>
      </div>
      <div style={styles.result}>
        {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        <p style={styles.exchangeRate}>
          Exchange Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
