import Button from "../Button/Button";
import "./Form.scss";

export default function Form(value, key, region) {
  return (
    <div>
      <h1>Generate Facts and Images</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a region:
          <select value={selectedRegion} onChange={handleRegionChange} required>
            <option value="">Select a region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <button type="submit"></button>
      </form>
    </div>
  );
}
