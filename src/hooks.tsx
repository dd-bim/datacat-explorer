import {Dispatch, useState} from "react";
import {useFormContext} from "react-hook-form";
import get from "lodash.get";
import useAuthContext from "./hooks/useAuthContext";

export function useLocalStorage<S>(key: string, initialState: S): [S, Dispatch<S>] {
  // State to store our id
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<S>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      // If error also return initialState
      console.log(error);
      return initialState;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new id to localStorage.
  const setValue = (value: S) => {
    try {
      // Allow id to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value() : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const useGraphiQLFetcher = () => {
  const {token} = useAuthContext();
  let headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) {
    headers = { 'Authorization': `Bearer ${token}`, ...headers };
  }
  return (params: any) => fetch(process.env.REACT_APP_API as string, {
    method: 'POST',
    headers,
    body: JSON.stringify(params),
  }).then(response => response.json());
}

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

export function useQueryOptions(initialQuery = "",  initialPageNumber = 0, initialPageSize = 10) {
  const [query, setQuery] = useState(initialQuery);
  const { pageSize, setPageSize, pageNumber, setPageNumber } = usePagination(initialPageNumber, initialPageSize);

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setPageNumber(0);
  };

  return {
    query,
    setQuery: handleQueryChange,
    pageSize,
    setPageSize,
    pageNumber,
    setPageNumber
  };
}

export type Concept = { __typename: string, id: string, label: string };

export function useAsFormValue(options: { name: string, defaultValue: Concept | null }) {
  const { name, defaultValue } = options;
  const { errors } = useFormContext();
  const [current, setCurrent] = useState(defaultValue);
  const error = get(errors, name);

  const handleNewConcept = (concept?: Concept) => {
    setCurrent(concept ? concept : null);
  };

  return {current, setValue: handleNewConcept, error};
}
