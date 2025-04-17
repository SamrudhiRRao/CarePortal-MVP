import './App.css';
import { useState } from "react";
import Step1Name from "./components/Step1Name";
import Step2CareType from "./components/Step2CareType";
import Step3ZipCode from "./components/Step3ZipCode";
import Result from "./components/Result";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    careType: "",
    zip: "",
  });
  const [matchResult, setMatchResult] = useState(null);

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  return (
    <div className="container">
      <h1 className="title" style={{ color: '#6A0DAD', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#6A0DAD" width="28" height="28" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
                  2.09C13.09 3.81 14.76 3 16.5 3 
                  19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                  6.86-8.55 11.54L12 21.35z" />
        </svg>
        CarePortal MVP
      </h1>
      {step === 1 && <Step1Name data={formData} setData={setFormData} next={next} />}
      {step === 2 && <Step2CareType data={formData} setData={setFormData} next={next} prev={prev} />}
      {step === 3 && formData.careType !== "day care" && (
        <Step3ZipCode data={formData} setData={setFormData} next={next} prev={prev} setMatchResult={setMatchResult} />
      )}
      {((step === 3 && formData.careType === "day care") || step === 4) && (
        <Result formData={formData} result={matchResult} />
      )}
    </div>
  );
}

export default App;
