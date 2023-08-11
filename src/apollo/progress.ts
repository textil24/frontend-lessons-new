import { gql } from "@apollo/client";

export const GET_PROGRESS = gql`
    query GetProgress($tgUserId: Int!, $contentId: Int!, $lessonId: String!) {
        getProgress(tgUserId: $tgUserId, contentId: $contentId, lessonId: $lessonId) {
            id
            tgUserId
            contentId
            lessonId
            isEstimated
        }
    }
`

export const ADD_PROGRESS = gql`
    mutation CreateProgress($input: ProgressInput!) {
        createProgress(input: $input) {
            id
            tgUserId
            contentId
            lessonId
            isEstimated
        }
    }
`