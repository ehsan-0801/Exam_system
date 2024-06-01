// import prisma from "./prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    try {
        const id = params.id;

        const org = await prisma.organization.findUnique({ where: { id: id } });
        if (org) {
            console.log("organization found:", org);
            return Response.json(org);
        } else {
            console.log("No organization found with email:", id);
            return Response.json({ Message: "failed", status: 500 });
        }
    } catch (error) {
        console.error("Error finding organization:", error);
        return Response.json({ Message: "failed", status: 500 })
    }
}
export async function PUT(req, { params }) {
    const id = params.id;
    console.log(req.body)
    const body = await req.json()
    console.log(body)
    const { name, address, purchaseDate, expiryDate } = body;
    try {

        // const imageUrl = await put(imagefile.name, req.body, { access: 'public' })
        const organization = await prisma.organization.update({
            where: {
                id: id
            },
            data: {
                org_name: name,
                address: address,
                purchased_date: new Date(purchaseDate),
                expiry_date: new Date(expiryDate),
            },
        });
        console.log("Successful")
        return Response.json({ Message: "Organization Updated" });
    }
    catch (error) {
        console.error("Error finding user:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}
export async function DELETE(req, { params }) {
    const id = params.id;
    try {
        const organization = await prisma.organization.delete(
            {
                where: { id: id }
            }
        )
        console.log("Successful")
        return Response.json({ Message: "Organization Deleted" })
    } catch (error) {
        console.error("Error finding user:", error);
        return Response.json({ Message: "failed", status: 500 })
    }

}