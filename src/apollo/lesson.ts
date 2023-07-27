import { gql } from "@apollo/client";

export const GET_COURSE = gql`
    query GetCourse($getCourseId: UUID!) {
        getCourse(id: $getCourseId) {
            id
            name
            lessons {
                id
                name
            }
        }
    }
`

export const GET_LESSON = gql`
    query GetLesson($getLessonId: UUID!) {
        getLesson(id: $getLessonId) {
            id
            name
            content
            nextLessonId
            prevLessonId
        }
    }
`
