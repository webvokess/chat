import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const POST = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  let input = req.body;

  try {
    const token = req.cookies["token"];
    if (!token) throw new Error("Unauthorized");

    const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload;
    console.log(jwtPayload);

    let id = "";
    if (jwtPayload && jwtPayload.id) id = jwtPayload.id;
    if (input.password) {
      const hash = bcrypt.hashSync(input.password, 10);
      input.password = hash;
    }
    const filteredInput = Object.fromEntries(
      Object.entries(input).filter(([_, value]) => value !== "")
    );
    console.log(filteredInput);
    let user = await prisma.user.update({
      where: { id },
      data: {
        ...filteredInput,
      },
    });
    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
