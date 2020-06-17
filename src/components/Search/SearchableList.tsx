import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {CatalogItemFragment} from "../../generated/types";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchField, {SearchFieldProps} from "./SearchField";
import {ApolloError} from "@apollo/client";
import AsyncWrapper from "../View/AsyncWrapper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import TextFieldOptions from "../form/TextFieldOptions";

const useStyles = makeStyles(theme => ({
    search: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    }
}))

type SearchableListProps = {
    loading?: boolean,
    error?: ApolloError | boolean,
    items: CatalogItemFragment[],
    onSelect(item: CatalogItemFragment): void,
    SearchFieldProps: SearchFieldProps
}

export default function SearchableList(props: SearchableListProps) {
    const {loading, error, items, onSelect, SearchFieldProps} = props;
    const classes = useStyles();

    return (
        <Paper>
            <div className={classes.search}>
                <SearchField
                    {...TextFieldOptions}
                    {...SearchFieldProps}/>
            </div>
            <List dense disablePadding>
                <AsyncWrapper
                    loading={loading}
                    loadingComponent={
                        <ListItem key="loading" dense>
                            <ListItemText secondary="Loading..." />
                        </ListItem>
                    }
                    error={error}
                    errorComponent={
                        <ListItem key="error" dense>
                            <ListItemText secondary="An error has occured..." />
                        </ListItem>
                    }
                >
                    {items.map(item => (
                        <ListItem key={item.id} dense button>
                            <ListItemIcon>
                                <CatalogItemIcon itemType={item.__typename}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                secondary={item.id}
                                onClick={() => onSelect(item)}
                            />
                        </ListItem>
                    ))}
                </AsyncWrapper>
            </List>
        </Paper>
    )
}
