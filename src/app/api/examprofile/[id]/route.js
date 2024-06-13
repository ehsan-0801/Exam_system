import prisma from "../../prisma"
export async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        console.log("Exam ID: ",id);
        const exam = await prisma.exam.findUnique({
            include: {
                user: true,
            },
            where: {
                id: id,
            }
        });
        if (exam) {
            return Response.json(exam);
        } else {
            console.log("No Exam Profile Found:", id);
            return Response.json({ Message: "failed", status: 500 });
        }
    } catch (error) {
        console.error("Error finding Exam Profile:", error);
        return Response.json({ Message: "failed", status: 500 })
    }
}
export async function PUT(req, { params }) {
    const id = parseInt(params.id);
    console.log(req.body)
    const body = await req.json()
    console.log(body)
    const { subject, examType, mcqCategory, correctAns, wrongAns, bubbleThreshold, status, exam_date,  user_id } = body;
    try {

        // const imageUrl = await put(imagefile.name, req.body, { access: 'public' })
        const exam = await prisma.exam.update({
            where: {
                id: id
            },
            data: {
                subject: subject,
                exam_type: examType,
                mcq_category: mcqCategory,
                correct_ans : correctAns,
                Wrong_ans: wrongAns,
                bubble_threshold: bubbleThreshold,
                status: status,
                exam_date: exam_date,
                user_id: user_id,
            },
        });
        // console.log("Successful")
        return Response.json({ Message: "Exam Profile Updated" });
    }
    catch (error) {
        console.error("Error finding Exam Profile:", error);
        return Response.json({ Message: "failed", status: 5000 })
    }
}