import {EntityTypes, useCatalogStatisticsQuery} from "../../generated/types";
import AsyncWrapper from "../View/AsyncWrapper";
import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import {getAbsPath, getRoutes, RouteCategory} from "../../Routes";
import Grid from "@material-ui/core/Grid";
import ViewHeader from "../View/ViewHeader";
import {Link as RouterLink} from "react-router-dom";
import ViewWrapper from "../View/ViewWrapper";

export default function StatisticsView() {
    const {loading, error, data} = useCatalogStatisticsQuery();
    const categories = [
        [RouteCategory.Object, RouteCategory.Collection],
        [RouteCategory.Relationship, RouteCategory.Association],
        [RouteCategory.Assignment]
    ];
    return (
        <ViewWrapper>
            <ViewHeader title="Statistic"/>
            <AsyncWrapper
                loading={loading}
                error={error}
            >
                <Grid container spacing={3}>
                    {categories.map((arr, idx) => (
                        <Grid key={idx} item xs={4}>
                            <List>
                                {getRoutes({categories: arr}).map(([id, route]) => {
                                    const statistics = data?.statistics.items.find(item => item.id === id);
                                    return (
                                        <ListItem key={id} button component={RouterLink} to={getAbsPath(route)}
                                                  disabled={route.disabled}>
                                            <ListItemIcon>
                                                <CatalogItemIcon itemType={(id as EntityTypes)}/>
                                            </ListItemIcon>
                                            <ListItemText primary={id} secondary={statistics?.count || 0}/>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Grid>
                    ))}
                </Grid>
            </AsyncWrapper>
        </ViewWrapper>
    );
}
