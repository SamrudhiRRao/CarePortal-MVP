function Step2CareType({ data, setData, next, prev }) {
    const handleChange = (e) => {
      setData({ ...data, careType: e.target.value });
    };
  
    const handleNext = () => {
      if (data.careType === "day care") {
        next(); // Skip zip code step
      } else {
        next();
      }
    };
  
    return (
      <div>
        <h2 style={{ color: "#6A0DAD" }}>Step 2: Type of Care</h2>
        <label>
          <input type="radio" value="stationary" checked={data.careType === "stationary"} onChange={handleChange} />
          Stationary
        </label>
        <br />
        <label>
          <input type="radio" value="ambulatory" checked={data.careType === "ambulatory"} onChange={handleChange} />
          Ambulatory
        </label>
        <br />
        <label>
          <input type="radio" value="day care" checked={data.careType === "day care"} onChange={handleChange} />
          Day Care
        </label>
        <br />
        <button onClick={prev}>Back</button>
        <button onClick={handleNext} disabled={!data.careType}>Next</button>
      </div>
    );
  }
  
  export default Step2CareType;
  