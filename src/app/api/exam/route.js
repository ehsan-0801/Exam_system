import prisma from "../prisma";

export async function POST(req) {
    const body = await req.json();
    const { subject, examType, mcqCategory, correctAns, wrongAns, bubbleThreshold, status, exam_date, user_id } = body;

    try {
        const exam = await prisma.exam.create({
            data: {
                subject,
                exam_type: examType,
                mcq_category: mcqCategory,
                correct_ans: correctAns,
                Wrong_ans: wrongAns,
                bubble_threshold: bubbleThreshold,
                status,
                exam_date,
                user_id,
            }
        });
        console.log("Successful")
        return new Response(JSON.stringify({ Message: "Exam Submitted" }), { status: 200 });
    }
    catch (error) {
        console.error("Error creating exam:", error);
        return new Response(JSON.stringify({ Message: "Failed", status: 500 }), { status: 500 });
    }
}
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