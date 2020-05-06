import {useState} from "react";
import {QueryConnection, XtdEntity} from "./types";
import {DocumentNode, QueryHookOptions, useQuery} from "@apollo/client";
import {useFormContext} from "react-hook-form";
import get from "lodash.get";

interface Pagination {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  pageSize: number;
  setPageSize: (pageNumber: number) => void;
}

export function usePagination(initialPageNumber = 0, initialPageSize = 10): Pagination {
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const handleChangeRowsPerPage = (pageSize: number): void => {
    setPageSize(pageSize);
    setPageNumber(0);
  };

  const handleChangePage = (page: number) => {
    setPageNumber(page);
  };

  return {
    pageSize,
    setPageSize: handleChangeRowsPerPage,
    pageNumber,
    setPageNumber: handleChangePage,
  };
}

export function useQueryOptions(initalTerm = '',  initialPageNumber = 0, initialPageSize = 10) {
  const [term, setTerm] = useState(initalTerm);
  const { pageSize, setPageSize, pageNumber, setPageNumber } = usePagination(initialPageNumber, initialPageSize);

  const handleTermChange = (newTerm: string) => {
    setTerm(newTerm);
    setPageNumber(0);
  };

  return {
    term,
    setTerm: handleTermChange,
    pageSize,
    setPageSize,
    pageNumber,
    setPageNumber
  };
}

export interface FindOneQueryData<T> {
  [name: string]: T
}

export function useFindOneQuery<T extends XtdEntity>(query: DocumentNode, key: string, options: QueryHookOptions<FindOneQueryData<T>>) {
  const { data, ...otherProps } = useQuery<FindOneQueryData<T>>(query, options);
  return { result: data?.[key], ...otherProps };
}

export interface FindAllQueryData<T> {
  [name: string]: QueryConnection<T>
}

export function useFindAllQuery<T extends XtdEntity>(query: DocumentNode, key: string, options: QueryHookOptions<FindAllQueryData<T>>) {
  const { data, ...otherProps } = useQuery<FindAllQueryData<T>>(query, options);
  return { nodes: data?.[key].nodes, pageInfo: data?.[key].pageInfo, totalElements: data?.[key].totalElements, ...otherProps };
}

export function useAsFormValue(options: { name: string, defaultValue: XtdEntity | null }) {
  const { name, defaultValue } = options;
  const { errors } = useFormContext();
  const [current, setCurrent] = useState(defaultValue);
  const error = get(errors, name);

  const handleNewConcept = (concept?: XtdEntity) => {
    setCurrent(concept ? concept : null);
  };

  return {current, setValue: handleNewConcept, error};
}
