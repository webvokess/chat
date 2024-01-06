import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/prisma";
import { AuthResponse } from "../dto/auth.output";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) => {
  let input = req.body;
  console.log("here");
  try {
    let user = await prisma.user.findFirst({
      where: { email: input.email },
    });
    console.log(user);

    if (!user) res.status(404).send({ message: "User Not found" });

    let passwordIsValid = bcrypt.compareSync(input.password, user!.password);

    if (!passwordIsValid) res.status(404).send({ message: "Invalid Password" });

    const token =
      "Bearer " + jwt.sign({ id: user!.id }, process.env.JWT_SECRET as string);
    console.log(token);
    cookies().set("token", token);
    res.status(200).send({ message: "Successfully Logged in", token: token });
    return;
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default POST;
