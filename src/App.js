import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleStepPrevious() {
    setStep((step) => step - 1);
  }

  function handleStepNext() {
    setStep((step) => step + 1);
  }

  function handleCountPrevious() {
    if (step === 0) {
      setCount((c) => c - 1);
    } else {
      setCount((c) => c - step);
    }
  }

  function handleCountNext() {
    if (step === 0) {
      setCount((c) => c + 1);
    } else {
      setCount((c) => c + step);
    }
  }

  function getDateFromCount(count) {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    return newDate.toDateString();
  }

  return (
    <div>
      <h1>Date Counter </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{ height: "32px", width: "32px" }}
          onClick={handleStepPrevious}
        >
          -
        </button>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {`STEP : ${step}`}
        </p>
        <button
          style={{ height: "32px", width: "32px" }}
          onClick={handleStepNext}
        >
          +
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          style={{ height: "32px", width: "32px" }}
          onClick={handleCountPrevious}
        >
          -
        </button>
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {`COUNT : ${count}`}
        </p>
        <button
          style={{ height: "32px", width: "32px" }}
          onClick={handleCountNext}
        >
          +
        </button>
      </div>

      <h3 style={{ fontSize: "24px", textAlign: "center" }}>
        {count} days from Today is {getDateFromCount(count)}
      </h3>
    </div>
  );
}

export default App;
