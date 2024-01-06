import prisma from "@/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const GET = async (
    req: NextApiRequest,
    res: NextApiResponse<any>
) => {
    let input = req.body;
    try {
        const token = req.cookies["token"]
        console.log("token", token);
        if (!token) throw new Error("Unauthorized")
        const jwtPayload = jwt.decode(token) as JwtPayload
        console.log(jwtPayload);
        let id = "";
        if (jwtPayload && jwtPayload.id) id = jwtPayload.id;
        let user = await prisma.user.findFirst({ where: { id } });
        if (user) res.status(200).send(user);
        else throw new Error("User Not Found");
    } catch (error: any) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

export default GET;