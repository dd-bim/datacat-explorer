import React, {useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import ErrorAlert from '../ErrorAlert';
import {CircularProgress} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RelGroupsChip from './RelGroupsChip';
import XtdList from '../list/XtdList';
import gql from 'graphql-tag';
import SubjectChip from '../subjects/SubjectChip';

const REL_GROUPS_DETAILS_VIEW_QUERY = gql`
    query RelGroupsDetailView($id: ID!, $searchTerm: String, $pageNumber: Int) {
        groupsRelationship(id: $id) {
            created
            lastModified
            versionId
            versionDate
            id
            names {
                id
                name
            }
            descriptions {
                id
                description
            }
            relatingObject {
                id
                label
                created
                lastModified
                versionId
                versionDate
                descriptions {
                    id
                    description
                }
            }
            relatedObjects(options: {
                term: $searchTerm
                pageNumber: $pageNumber
            }) {
                nodes {
                    type: __typename
                    id
                    label
                }
                page {
                    pageNumber
                    pageSize
                    totalElements
                }
            }
        }
    }
`;

export default function RelGroupsDetailsView() {
    const {params: {id}} = useRouteMatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const {loading, error, data} = useQuery(
        REL_GROUPS_DETAILS_VIEW_QUERY,
        {variables: {id, searchTerm, pageNumber}});

    if (error) return <ErrorAlert/>;
    if (loading) return <CircularProgress/>;

    const relatedObjectsListSearchChange = e => {
        setSearchTerm(e.target.value);
    };

    const {
        created, lastModified, versionId, versionDate,
        relatingObject, relatedObjects,
    } = data.groupsRelationship;

    return (
        <Grid container spacing={1}>
            <Grid container item spacing={1} xs={6}>
                <Grid item xs={12}>
                    <Typography variant="h4">Eigene Eigenschaften</Typography>
                    <Typography variant="body1">
                        Unique ID: {id}<br/>
                        Name: <RelGroupsChip label={`${id.substr(0, 6)}..<${relatingObject.label}>`}/><br/>
                        Created: {created}<br/>
                        Last modified: {lastModified}<br/>
                        Version: {versionId} / {versionDate}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">Gruppierendes Objekt</Typography>
                    <Typography variant="body1">
                        Unique ID: {relatingObject.id}<br/>
                        Name: <SubjectChip label={relatingObject.label} /><br/>
                        Created: {relatingObject.created}<br/>
                        Last modified: {relatingObject.lastModified}<br/>
                        Version: {relatingObject.versionId} / {relatingObject.versionDate}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">Gruppierte Objekte ({relatedObjects.nodes.length} / {relatedObjects.page.totalElements})</Typography>
                <XtdList items={relatedObjects.nodes} value={searchTerm} onChange={relatedObjectsListSearchChange}/>
            </Grid>
        </Grid>
    );
}
