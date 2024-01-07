import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const POST = async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
  let input = req.body;

  try {
    const token = req.cookies["token"];
    if (!token) throw new Error("Unauthorized");

    const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload;
    console.log(jwtPayload);
    let contact = await prisma.contact.create({
      data: {
        savedForId: input.savedForId,
      },
    });
    return !!contact;
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
