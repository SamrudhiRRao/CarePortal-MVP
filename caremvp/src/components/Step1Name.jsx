function Step1Name({ data, setData, next }) {
    const handleChange = (e) => {
      setData({ ...data, name: e.target.value });
    };
  
    return (
      <div>
        <h2 style={{ color: "#6A0DAD" }}>Step 1: Patient Name</h2>
        <input
          type="text"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter patient name"
          required
        />
        <br />
        <button onClick={next} disabled={!data.name.trim()}>
          Next
        </button>
      </div>
    );
  }
  
  export default Step1Name;
  