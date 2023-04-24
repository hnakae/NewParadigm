import React, { useState } from "react";

export default function RomanToInteger() {
  const [romanNumeral, setRomanNumeral] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch(
      `/api/romantointeger?romanNumeral=${romanNumeral}`
    );
    const data = await response.json();

    setResult(data.result);
  };

  return (
    <div className="max-w-xs p-6">
      <form className="hover:outline" onSubmit={handleSubmit}>
        <h1>Convert a Roman numeral to an integer.</h1>
        <h2>I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000.</h2>
        <div className="mb-4">
          <label>
            <input
              type="text"
              placeholder="Roman Numeral:"
              value={romanNumeral}
              onChange={(e) => setRomanNumeral(e.target.value.toUpperCase())}
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Convert
          </button>
        </div>
        {result !== null && (
          <p className="font-bold">The integer is {result}</p>
        )}
      </form>
    </div>
  );
}
