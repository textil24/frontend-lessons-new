import { gql } from "@apollo/client";

export const GET_LESSON = gql`
    query GetLesson($getLessonId: UUID!) {
        getLesson(id: $getLessonId) {
            id
            name
            content
            nextLessonId
            prevLessonId
            course {
                id
                name
                lessons {
                    name
                    id
                }
            }
        }
    }
`