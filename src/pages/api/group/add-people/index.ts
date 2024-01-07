import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const POST = async (req: NextApiRequest, res: NextApiResponse<boolean>) => {
  let input = req.body;

  try {
    const token = req.cookies["token"];
    if (!token) throw new Error("Unauthorized");
    const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload;
    const group = await prisma.group.findUnique({
      select: {
        users: true,
      },
      where: { id: input.groupId },
    });
    const existingMembers = group!.users.map((user) => ({ id: user.id }));
    if (!existingMembers.includes({ id: jwtPayload.id })) return false;
    const newMembers = input.memberIds.map((userId: string) => ({
      id: userId,
    }));
    const members = [...existingMembers, ...newMembers];
    const groupUpdated = await prisma.group.update({
      where: { id: input.groupMemberId },
      data: {
        users: {
          set: members.map((member) => ({ ...member })),
        },
      },
    });
    return !!groupUpdated;
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
