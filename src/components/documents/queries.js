import gql from 'graphql-tag';

const docProps = gql`
    fragment DocumentProps on XtdExternalDocument {
        uniqueId
        created
        lastModified
        names {
            uniqueId
            name
        }
    }
`;

export const getDocs = gql`
    query getDocuments($term: String, $pageSize: Int, $pageNumber: Int) {
        documents(options: {
            term: $term
            pageSize: $pageSize
            pageNumber: $pageNumber
        }) {
            nodes {
                ...DocumentProps
            }
            page {
                totalElements
                pageSize
                pageNumber
            }
        }
    }
    ${docProps}
`;

export const addDoc = gql`
    mutation addDoc($uniqueId: ID!, $names: [XtdNameInput!]!) {
        addDocument(newDocument: {
            uniqueId: $uniqueId
            names: $names
        }) {
            ...DocumentProps
        }
    }
    ${docProps}
`;

export const deleteDoc = gql`
    mutation deleteDocument($uniqueId: ID!) {
        deleteDocument(uniqueId: $uniqueId) {
            ...DocumentProps
        }
    }
    ${docProps}
`;
