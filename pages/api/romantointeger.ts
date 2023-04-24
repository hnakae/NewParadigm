import { NextApiRequest, NextApiResponse } from "next";

const romanToInt = (s: string): number => {
  const romanNumeralMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumeralMap[s[i]];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //given
  const { romanNumeral } = req.query;
  //when
  const result = romanToInt(romanNumeral as string);
  //then
  res.status(200).json({ result });
}
