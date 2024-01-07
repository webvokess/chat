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
    let userUpdated = await prisma.user.update({
      where: { id: jwtPayload.id },
      data: {
        groups: {
          create: [{ name: input.groupName }],
        },
      },
    });

    // If the above does not work properly
    // const newGroup = await prisma.group.create({
    //     data: {
    //       name: input.groupName,
    //     },
    //   });

    //   const updatedUser = await prisma.user.update({
    //     where: { id: jwtPayload.id },
    //     data: {
    //       groups: {
    //         connect: {
    //           id: newGroup.id,
    //         },
    //       },
    //     },
    //   });
    return !!userUpdated;
  } catch (error: any) {
    console.log(error);
    res.status(500).send(false);
  }
};

export default POST;
