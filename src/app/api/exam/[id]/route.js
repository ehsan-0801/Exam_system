import prisma from "../../prisma"
export async function GET(request, { params }) {
    try {
        const user_id = parseInt(params.id);
        console.log(user_id);
        const exam = await prisma.exam.findMany({
            include: {
                user: true,
            },
            where: {
                user_id: user_id,
            }
        });
        if (exam) {
            // console.log("organization found:", exam);
            return Response.json(exam);
        } else {
            console.log("No organization found with email:", user_id);
            return Response.json({ Message: "failed", status: 500 });
        }
    } catch (error) {
        console.error("Error finding organization:", error);
        return Response.json({ Message: "failed", status: 500 })
    }
}