// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  if (req.body.state === "alerting") {
    res.status(500).json(req.body);
  } else {
    res.status(200).json(req.body);
  }
}
