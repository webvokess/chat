import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

const POST = async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
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

    let user = await prisma.user.update({
      where: { id },
      data: {
        ...input,
      },
    });
    return !!user;
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
