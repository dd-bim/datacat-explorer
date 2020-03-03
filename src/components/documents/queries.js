import gql from 'graphql-tag';

const docProps = gql`
    fragment DocumentProps on XtdExternalDocument {
        id
        created
        lastModified
        names {
            id
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
    mutation addDoc($id: ID!, $names: [XtdNameInput!]!) {
        addDocument(newDocument: {
            id: $id
            names: $names
        }) {
            ...DocumentProps
        }
    }
    ${docProps}
`;

export const deleteDoc = gql`
    mutation deleteDocument($id: ID!) {
        deleteDocument(id: $id) {
            ...DocumentProps
        }
    }
    ${docProps}
`;
