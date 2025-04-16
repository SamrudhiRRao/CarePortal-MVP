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
      <h1 className="title">CarePortal MVP</h1>
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
