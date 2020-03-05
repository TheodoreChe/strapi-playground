import gql from "graphql-tag";

export const MESSAGES = gql`
    query Message {
        messages {
            id
            title
        }
    }
`;