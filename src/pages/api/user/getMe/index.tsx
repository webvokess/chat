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
        console.log(token.split(" ")[1])
        const jwtPayload = jwt.decode(token.split(" ")[1]) as JwtPayload
        console.log(jwtPayload);

        let id = "";
        if (jwtPayload && jwtPayload.id) id = jwtPayload.id;
        let user = await prisma.user.findUnique({ where: { id }, include: { savedContacts: true } });
        console.log(user)


        if (user) { res.status(200).send({ ...user, password: undefined }); }
        else throw new Error("User Not Found");
    } catch (error: any) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

export default GET;