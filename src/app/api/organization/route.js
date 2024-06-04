import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { put } from '@vercel/blob';

export async function POST(req) {
    // console.log(req.body)
    const body = await req.json()
    // console.log(body)
    const { name, address, status, purchaseDate, expiryDate } = body;
    try {

        // const imageUrl = await put(imagefile.name, req.body, { access: 'public' })
        const organization = await prisma.organization.create({
            data: {
                org_name: name,
                address: address,
                status: status,
                purchased_date: new Date(purchaseDate),
                expiry_date: new Date(expiryDate),
            },
        });
        console.log("Successful")
        return Response.json({ Message: "Organization Submitted" });
    }
    catch (error) {
        console.error("Error finding user:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}

export async function GET(request, { params }) {
    try {

        const organization = await prisma.organization.findMany();
        if (organization) {
            console.log("organization found:", organization);
            return Response.json(organization);
        } else {
            console.log("No organization found with email:", email);
            return Response.json({ Message: "failed", status: 5000 });
        }
    } catch (error) {
        console.error("Error finding organization:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}