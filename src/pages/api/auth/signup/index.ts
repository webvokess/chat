import { NextApiRequest, NextApiResponse } from "next";
import { AuthResponse } from "../dto/auth.output";
import prisma from "@/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) => {
  let input = req.body;

  try {
    let check = await prisma.user.findFirst({ where: { email: input.email } });

    if (check) res.status(404).send({ message: "User Already Exists" });

    const hash = bcrypt.hashSync(input.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...input,
        password: hash,
      },
    });

    const token =
      "Bearer " +
      jwt.sign({ id: newUser.id }, process.env.JWT_SECRET as string);

    res.status(200).send({ message: "Signed up successfully", token: token });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default POST;
