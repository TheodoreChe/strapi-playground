import gql from "graphql-tag";

export const MESSAGES = gql`
    query Messages {
        messages {
            id
            title
        }
    }
`;

export const MESSAGE = gql`
    query Messages($id: ID!) {
        message(id: $id) {
            id
            title
            content
            image {
                url
            }
        }
    }
`;
