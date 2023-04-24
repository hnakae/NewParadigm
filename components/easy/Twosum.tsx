import { useState } from "react";
import axios from "axios";

const TwoSumForm = () => {
  const [nums, setNums] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState<number[]>([]);
  const [error, setError] = useState("");

  const handleNumsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNums(e.target.value);
  };

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setResult([]);

    try {
      const response = await axios.post("/api/two-sum", {
        nums: nums.split(",").map(Number),
        target: Number(target),
      });
      setResult(response.data);
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-xs p-6">
      <form className="hover:outline" onSubmit={handleSubmit}>
        <h1>Two Sum</h1>
        <h2>Find Two Indices that Add up to Target.</h2>
        <div className="mb-4">
          <label htmlFor="nums">
            Enter an Array of Numbers (comma-separated):
          </label>
          <input
            type="text"
            id="nums"
            value={nums}
            onChange={handleNumsChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="target">Enter a Target Number:</label>
          <input
            type="number"
            id="target"
            value={target}
            onChange={handleTargetChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            type="submit"
          >
            Submit
          </button>
        </div>
        {result.length > 0 && (
          <p className="block text-gray-700 text-sm font-bold mb-2">
            The two indices that add up to {target} are: {result[0]} and{" "}
            {result[1]}
          </p>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default TwoSumForm;
