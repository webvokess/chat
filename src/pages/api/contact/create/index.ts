import prisma from "@/prisma";
import { Contact } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const POST = async (req: NextApiRequest, res: NextApiResponse<Contact>) => {
  let input = req.body;

  try {
    const token = req.cookies["token"];
    if (!token) throw new Error("Unauthorized");

    const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload;
    console.log(jwtPayload);
    let contact = await prisma.contact.create({
      data: {
        email: input.email,
        name: input.name,
        savedFor: {
          connect: {
            id: jwtPayload.id,
          },
        },
      },
    });
    res.send(contact);
    return contact;
  } catch (error: any) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export default POST;
