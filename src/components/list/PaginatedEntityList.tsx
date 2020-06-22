import PaginatedList from "./PaginatedList";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {CatalogItemFragment} from "../../generated/types";

export interface PaginatedEntityListProps {
    label: string
    items?: CatalogItemFragment[];
    pageNumber?: number;
    totalPages?: number;
    onSelectItem?: (item: CatalogItemFragment) => void;
    onChangePage?: (page: number) => void;
}

export default function PaginatedEntityList(props: PaginatedEntityListProps) {
    const {
        label,
        items,
        pageNumber,
        totalPages,
        onSelectItem,
        onChangePage
    } = props;

    const listItems = items?.map(item => (
        <ListItem
            key={item.id}
            button
            disabled={!onSelectItem}
            onClick={onSelectItem ? () => onSelectItem(item) : undefined}
        >
            <ListItemIcon>
                <CatalogItemIcon itemType={item.__typename} />
            </ListItemIcon>
            <ListItemText
                primary={item.label}
                secondary={item.id}
            />
        </ListItem>
    ));

    return (
        <React.Fragment>
            <Typography variant={"body1"}>{label}</Typography>
            <PaginatedList
                onChangePage={onChangePage}
                PaginationProps={{
                    page: pageNumber !== undefined ? pageNumber + 1 : undefined,
                    count: totalPages
                }}
            >
                {listItems}
            </PaginatedList>
        </React.Fragment>
    );
}
