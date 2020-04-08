import {useState} from "react";

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
