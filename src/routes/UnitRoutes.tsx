import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdUnit} from "../types";
import ObjectCreateView from "../views/ObjectCreateView";
import ObjectUpdateView from "../views/ObjectUpdateView";

const baseProperties = gql`
    fragment Props on XtdUnit {
        id
        label
        created
        lastModified
        versionId
        versionDate
        names {
            id
            created
            lastModified
            languageCode
            value
        }
        descriptions {
            id
            created
            lastModified
            languageCode
            value
        }
    }
`;

export const findOneQuery = gql`
    query findOneUnit($id: ID!) {
        node(id: $id) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const findAllQuery = gql`
    query findAllUnits($term: String, $options: PagingOptions) {
        units(term: $term, options: $options) {
            nodes {
                ...Props
                associates { totalElements }
                associatedBy { totalElements }
                composes { totalElements }
                composedBy { totalElements }
                groups { totalElements }
                groupedBy { totalElements }
                specializes { totalElements }
                specializedBy { totalElements }
                actsUpon { totalElements }
                actedUponBy { totalElements }
            }
            pageInfo {
                pageSize
                pageNumber
                totalPages
            }
            totalElements
        }
    }
    ${baseProperties}
`;

export const addMutation = gql`
    mutation add($input: RootInput!) {
        createUnit(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const updateMutation = gql`
    mutation update($input: RootUpdateInput!) {
        updateUnit(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteUnit(id: $id) {
            id
        }
    }
`;


export default function UnitRoutes() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <ObjectView<XtdUnit>
                            title={'Units'}
                            queryDataKey={'units'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <ObjectCreateView<XtdUnit>
                            title={'Add unit'}
                            addMutation={addMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <ObjectUpdateView<XtdUnit>
                            findOneQuery={findOneQuery}
                            findOneDataKey={'node'}
                            updateMutation={updateMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
            </Switch>
        </Grid>
    )
}
