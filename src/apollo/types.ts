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

export interface LessonElement {
    id: string;
    type: "title" | "text" | "image" | "prism" | "monaco";
    content: string;
  }  

export interface IGetLesson {
    getLesson: {
        id: string
        name: string
        nextLessonId: string
        prevLessonId: string
        orderBy: number,
        content: [
            LessonElement,
            {
                id: string,
                type: "answerSelector",
                question: string,
                answers: string[],
                corrects: string[]
            },
            {
                id: string,
                type: "task"
                title: string,
                text: string
            },
            {
                id: string,
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
