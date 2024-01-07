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

    if (input.isGroup) {
      let chat = await prisma.chat.create({
        data: {
          senderId: jwtPayload.id,
          groupId: input.recieverId,
          message: input.message,
        },
      });
      return !!chat;
    } else {
      let chat = await prisma.chat.create({
        data: {
          senderId: jwtPayload.id,
          recieverId: input.recieverId,
          message: input.message,
        },
      });
      return !!chat;
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
