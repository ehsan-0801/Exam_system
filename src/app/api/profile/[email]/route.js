// import prisma from "./prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    try {
        const email = params.email;

        const user = await prisma.user.findUnique({ where: { email: email } });
        if (user) {
            console.log("User found:", user);
            return Response.json(user);
        } else {
            console.log("No user found with email:", email);
            return Response.json({ Message: "failed", status: 5000 });
        }
    } catch (error) {
        console.error("Error finding user:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}