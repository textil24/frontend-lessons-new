export interface ICreateProgress {
    createProgress: [
        {
            tgUserId: number
            contentId: number
            lessonId: string
            isEstimated: boolean
        }
    ]
}

export interface IGetProgress {
    getProgress: {
        tgUserId: number
        contentId: number
        lessonId: string
        isEstimated: boolean
    }
}

export interface IGetCourses {
    getCourses: [
        {
            id: string
            name: string
            category: string
            preview: string
        }
    ]
}

export interface IGetCourse {
    getCourse: {
        id: string
        name: string
        description: string
        lessons: [
            {
                id: string
                name: string
            }
        ]
    }
}

export interface IGetLesson {
    getLesson: {
        id: string
        name: string
        nextLessonId: string
        prevLessonId: string
        orderBy: number,
        content: [
            {
                id: number;
                type: "title" | "text" | "image" | "prism" | "monaco";
                content: string;
            },
            {
                id: number,
                type: "answerSelector",
                question: string,
                answers: string[],
                corrects: string[]
            },
            {
                id: number,
                type: "task"
                title: string,
                text: string
            },
            {
                id: number,
                type: "note"
                text: string
            }
        ]
        course: {
            id: string
            name: string
            lessons: [
                {
                    id: string
                    name: string
                }
            ]
        }
    }
}
