import {useFindAllQuery, useQueryOptions} from "../hooks";
import {XtdEntity} from "../types";
import {gql} from "@apollo/client";
import CompositeTable from "../components/table/CompositeTable";
import * as React from "react";
import {route} from "../utils";
import {useHistory} from "react-router-dom";
import EntityTableHeader from "../components/table/EntityTableHeader";
import EntityTableRow from "../components/table/EntityTableRow";

const query = gql`
    query ConceptSelectSearch($options: SearchInput, $paging: PagingOptions) {
        search(options: $options, paging: $paging) {
            nodes { 
                id 
                label
            }
            page {
                pageSize
                pageNumber
                totalElements
                totalPages
            }
        }
    }
`;

export default function SearchView() {
    const history = useHistory();
    const { term, setTerm, pageNumber, setPageNumber, pageSize, setPageSize } = useQueryOptions();
    const { loading, error, nodes, page } = useFindAllQuery<XtdEntity>(query, 'search', {
        fetchPolicy: "network-only",
        variables: {
            options: { term  },
            paging: { pageSize, pageNumber }
        }
    });

    const handleOnEdit = (entity: XtdEntity) => {
        history.push(`${route(entity.__typename)}/${entity.id}`);
    }

    return (
        <CompositeTable<XtdEntity>
            title={'Search'}
            loading={loading}
            error={error}
            tableHeader={<EntityTableHeader />}
            page={page}
            term={term}
            onTermChange={setTerm}
            onPageNumberChange={setPageNumber}
            onPageSizeChange={setPageSize}
        >
            {nodes?.map((row) => (
                <EntityTableRow<XtdEntity>
                    key={row.id}
                    row={row}
                    onEdit={handleOnEdit}
                />
            ))}
        </CompositeTable>
    );
}
