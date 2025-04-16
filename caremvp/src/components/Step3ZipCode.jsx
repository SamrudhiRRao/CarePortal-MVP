import { facilities } from "../data/facilities";

function Step3ZipCode({ data, setData, next, prev, setMatchResult }) {
  const handleChange = (e) => {
    setData({ ...data, zip: e.target.value });
  };

  const handleSubmit = () => {
    const patientZip = parseInt(data.zip);
    const matches = facilities.filter(fac => {
      const typeMatch =
        (fac.type === data.careType || fac.type === "both");
      const zipMatch =
        patientZip >= fac.zipRange[0] && patientZip <= fac.zipRange[1];
      return typeMatch && zipMatch;
    });

    const available = matches
      .filter(f => f.capacity === "available")
      .sort((a, b) => Math.abs(a.zip - patientZip) - Math.abs(b.zip - patientZip));

    const bestMatch = available.find(fac => Math.abs(fac.zip - patientZip) <= 3000);

    setMatchResult(bestMatch || null);
    next(); // Move to result page
  };

  return (
    <div>
      <h2 style={{ color: "#6A0DAD" }}>Step 3: Zip Code</h2>
      <input
        type="number"
        value={data.zip}
        onChange={handleChange}
        placeholder="Enter zip code"
        required
      />
      <br />
      <button onClick={prev}>Back</button>
      <button onClick={handleSubmit} disabled={!data.zip}>Submit</button>
    </div>
  );
}

export default Step3ZipCode;
