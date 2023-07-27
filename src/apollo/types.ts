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
    getCourse:
    {
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