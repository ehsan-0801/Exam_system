import {prisma} from "../prisma"
export async function GET(request, { params }) {
    try {

        const exam = await prisma.exam.findMany({
            include: {
                user: true,
            }
        });
        if (exam) {
            console.log("exam found:", exam);
            return Response.json(exam);
        } else {
            console.log("No exam found with email:", email);
            return Response.json({ Message: "failed", status: 5000 });
        }
    } catch (error) {
        console.error("Error finding exam:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}