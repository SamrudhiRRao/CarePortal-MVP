function Result({ formData, result }) {
    if (formData.careType === "day care") {
      return <p>No match found: Day care is not supported yet.</p>;
    }
  
    return (
      <div>
        <h2 style={{ color: "#6A0DAD" }}>Match Result</h2>
        {result ? (
          <p>Matched with Facility {result.name} ({result.type})</p>
        ) : (
          <p>No suitable facility found within 3000 zip codes.</p>
        )}
      </div>
    );
  }
  
  export default Result;
  