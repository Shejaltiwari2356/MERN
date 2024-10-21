import React, { useState } from "react";

const InterestCalculator = () => {
  const [formData, setFormData] = useState({
    principal: "",
    age: "",
    period: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { principal, age, period } = formData;

    const response = await fetch(
      "http://localhost:5000/api/investments/calculate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ principal, age, period }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setResult(data.interest);
    } else {
      console.error(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Principal Amount:</label>
          <input
            type="number"
            name="principal"
            value={formData.principal}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Investment Period (years):</label>
          <input
            type="number"
            name="period"
            value={formData.period}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Calculate Interest</button>
      </form>

      {result !== null && (
        <div>
          <h3>Interest Earned: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default InterestCalculator;
