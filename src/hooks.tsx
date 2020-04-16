import {useState} from "react";
import {QueryConnection, XtdEntity} from "./types";
import {DocumentNode, QueryHookOptions, useQuery} from "@apollo/client";

interface Pagination {
  pageNumber: number;
  setPageNumber: (value: (((prevState: number) => number) | number)) => void;
  pageSize: number;
  setPageSize: (value: (((prevState: number) => number) | number)) => void;
}

export function usePagination(initialPageNumber = 0, initialPageSize = 10): Pagination {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [pageSize, setPageSize] = useState(initialPageSize);
  return { pageNumber, setPageNumber, pageSize, setPageSize };
}

export function useQueryOptions(initalTerm = '',  initialPageNumber = 0, initialPageSize = 10) {
  const [term, setTerm] = useState(initalTerm);
  const pagination = usePagination(initialPageNumber, initialPageSize);
  return { term, setTerm, ...pagination};
}

interface FindAllQueryData<T> {
  [name: string]: QueryConnection<T>
}

export function useFindAllQuery<T extends XtdEntity>(query: DocumentNode, key: string, options: QueryHookOptions<FindAllQueryData<T>>) {
  const { data, ...otherProps } = useQuery<FindAllQueryData<T>>(query, options);
  return { nodes: data?.[key].nodes, page: data?.[key].page, ...otherProps };
}
