import {useCatalogStatisticsQuery} from "../../generated/types";
import AsyncWrapper from "../View/AsyncWrapper";
import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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
            <ViewHeader title="Catalog statistics"/>
            <AsyncWrapper
                loading={loading}
                error={error}
            >
                <Grid container spacing={3}>
                    {categories.map((arr, idx) => (
                        <Grid key={idx} item xs={4}>
                            <List>
                                {getRoutes({categories: arr}).map(([id, route]) => {
                                    const { icon, title, path, disabled } = route;
                                    const statistics = data?.statistics.items.find(item => item.id === id);
                                    const label = `${id}: ${statistics?.count || 0}`;

                                    return (
                                        <ListItem key={id}
                                                  button
                                                  component={RouterLink}
                                                  to={getAbsPath(route)}
                                                  disabled={disabled}>
                                            <ListItemIcon>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={title} secondary={label}/>
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
