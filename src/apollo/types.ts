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
                id: string,
                type: "title" | "text" | "image" | "prism" | "monaco"
                content: string
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
