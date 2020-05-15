import {useFindAllQuery, useQueryOptions} from "../../hooks";
import {XtdEntity} from "../../types";
import {gql} from "@apollo/client";
import CompositeTable from "../table/CompositeTable";
import * as React from "react";
import {route} from "../../utils";
import {useHistory} from "react-router-dom";
import EntityTableHeader from "../table/EntityTableHeader";
import EntityTableRow from "../table/EntityTableRow";
import RootTableRow from "../table/RootTableRow";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";

const query = gql`
    query ConceptSelectSearch($options: SearchInput, $paging: PagingOptions) {
        search(options: $options, paging: $paging) {
            nodes { 
                id 
                label
                ... on XtdRoot {
                    ...CompositeTableRoot
                    ...RootTableRowRoot
                }
            }
            pageInfo {
                ...CompositeTablePage
            }
            totalElements
        }
    }
    ${CompositeTable.fragments.root}
    ${CompositeTable.fragments.pageInfo}
    ${RootTableRow.fragments.root}
`;

export default function SearchView() {
    const history = useHistory();
    const q = useLocationQueryParam("q", "");
    const { term, setTerm, pageNumber, setPageNumber, pageSize, setPageSize } = useQueryOptions(q);
    const { loading, error, nodes, pageInfo, totalElements } = useFindAllQuery<XtdEntity>(query, 'search', {
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
            totalElements={totalElements}
            pageInfo={pageInfo}
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
