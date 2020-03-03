import gql from 'graphql-tag';

export const fetchObjects = gql`
    query FetchTerms($match: String, $pageNumber: Int, $pageSize: Int) { 
        objects(options: {label: xtdObject, match: $match, pageNumber: $pageNumber, pageSize: $pageSize}) {
            nodes {
                id
                versionId
                versionDate
                createdAt
                updatedAt
                names { value }
                descriptions { value }
            }
            page {
                number                    
                size
                totalElements
            }
        }
    }
`;
