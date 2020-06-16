import React from "react";
import {Column} from "react-table";

type UseTableRowsOptions<T> = {
    items?: T[],
    columnsFactory(): Column<object>[]
    rowFactory(item: T): object
}

export default function useTableRows<T>(options: UseTableRowsOptions<T>) {
    const { items, columnsFactory, rowFactory } = options;
    const columns = React.useMemo(
        columnsFactory,
        []
    );
    const rows = React.useMemo(() => {
        if (!items) {
            return [];
        }
        return items.map(rowFactory);
    }, [items]);

    return { columns, rows }
}
