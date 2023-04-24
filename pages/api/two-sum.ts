import type { NextApiRequest, NextApiResponse } from "next";
// import { twoSum } from "../../utils/twoSum";

type ReqBody = {
  nums: number[];
  target: number;
};

type ErrorResponse = {
  error: string;
};

function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No two sum solution");
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[] | ErrorResponse>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { nums, target }: ReqBody = req.body;

  if (!nums || !target) {
    res.status(400).json({ error: "Missing required parameter(s)" });
    return;
  }

  try {
    const result = twoSum(nums, target);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
