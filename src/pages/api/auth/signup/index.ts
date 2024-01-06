import { NextApiRequest, NextApiResponse } from "next";
import { AuthResponse } from "../dto/auth.output";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) => {
  let input = req.body;

  try {
    let check = await prisma.user.findFirst({ where: { email: input.email } });

    if (check) {
      res.status(404).send({ message: "User Already Exists" });
      return;
    }
    const hash = bcrypt.hashSync(input.password, 10);
    console.log(input, hash);

    const newUser = await prisma.user.create({
      data: {
        ...input,
        password: hash,
      },
    });

    const token =
      "Bearer " +
      jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string);
    console.log(token);

    res.setHeader(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=2592000`
    );

    res.status(200).send({ message: "Signed up successfully" });
    return;
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default POST;
