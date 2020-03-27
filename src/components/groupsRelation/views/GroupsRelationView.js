import React, {useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import {gql, useQuery} from '@apollo/client';
import ErrorAlert from '../../ErrorAlert';
import {CircularProgress} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RelGroupsChip from '../RelGroupsChip';
import XtdList from '../../list/XtdList';
import SubjectChip from '../../subjects/SubjectChip';

const REL_GROUPS_DETAILS_VIEW_QUERY = gql`
    query RelGroupsDetailView($id: ID!, $pageNumber: Int) {
        groupsRelation(id: $id) {
            created
            lastModified
            versionId
            versionDate
            id
            names {
                id
                value
            }
            descriptions {
                id
                value
            }
            relatingThing {
                id
                label
                created
                lastModified
                versionId
                versionDate
                descriptions {
                    id
                    value
                }
            }
            relatedThings(options: {
                pageNumber: $pageNumber
            }) {
                nodes {
                    type: __typename
                    id
                    label
                }
                page {
                    hasPrevious
                    hasNext
                    totalElements
                }
            }
        }
    }
`;



export default function GroupsRelationView() {
    const {params: {id}} = useRouteMatch();
    const [pageNumber, setPageNumber] = useState(0);
    const {loading, error, data} = useQuery(
        REL_GROUPS_DETAILS_VIEW_QUERY,
        {variables: {id, pageNumber}});

    if (error) return <ErrorAlert/>;
    if (loading) return <CircularProgress/>;

    const {
        created,
        lastModified,
        versionId,
        versionDate,
        relatingThing,
        relatedThings,
    } = data.groupsRelation;

    return (
        <Grid container spacing={1}>
            <Grid container item spacing={1} xs={6}>
                <Grid item xs={12}>
                    <Typography variant="h4">Eigene Eigenschaften</Typography>
                    <Typography variant="body1">
                        Unique ID: {id}<br/>
                        Name: <RelGroupsChip label={`${id.substr(0, 6)}..<${relatingThing.label}>`}/><br/>
                        Created: {created}<br/>
                        Last modified: {lastModified}<br/>
                        Version: {versionId} / {versionDate}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">Gruppierendes Objekt</Typography>
                    <Typography variant="body1">
                        Unique ID: {relatingThing.id}<br/>
                        Name: <SubjectChip label={relatingThing.label} /><br/>
                        Created: {relatingThing.created}<br/>
                        Last modified: {relatingThing.lastModified}<br/>
                        Version: {relatingThing.versionId} / {relatingThing.versionDate}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">Gruppierte Objekte ({relatedThings.nodes.length} / {relatedThings.page.totalElements})</Typography>
                <XtdList
                    items={relatedThings.nodes}
                    hasPrevious={relatedThings.page.hasPrevious}
                    hasNext={relatedThings.page.hasNext}
                    onNext={() => setPageNumber(pageNumber + 1)}
                    onBack={() => setPageNumber(pageNumber - 1)}
                />
            </Grid>
        </Grid>
    );
}
