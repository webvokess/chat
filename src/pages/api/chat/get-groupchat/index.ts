import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  let input = req.body;
  try {
    const token = req.cookies["token"];
    console.log("token", token);

    if (!token) throw new Error("Unauthorized");
    console.log(token.split(" ")[1]);
    const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload;
    console.log(jwtPayload);

    let chats = await prisma.chat.findMany({
      where: { senderId: jwtPayload.id, groupId: input.groupId },
    });
    chats = chats.sort((a, b) =>
      a.createdAt.getTime() < b.createdAt.getTime()
        ? -1
        : a.createdAt.getTime() > b.createdAt.getTime()
        ? 1
        : 0
    );
    res.status(200).send(chats);
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default GET;
