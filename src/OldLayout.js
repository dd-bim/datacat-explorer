import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Menu} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppDrawer from './components/appDrawer/AppDrawer';
import Grid from '@material-ui/core/Grid';
import {Route, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import React, {useState} from 'react';
import {useAction} from './hooks';
import {query as externalDocumentQuery} from './actions/externalDocument';
import {makeStyles} from '@material-ui/core/styles';
import ObjectList from './components/ObjectList';
import CollectionList from './components/CollectionList';
import {objects, collections} from './links';
import {
    createCollection,
    createObject,
    fetchCollection,
    fetchObject,
    updateCollection,
    updateObject,
} from './gqlQueries';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

export default function OldLayout(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const externalDocumentData = useAction(externalDocumentQuery);

    const objectRoutes = [];
    objects.forEach(obj => {
        const {label, objectType, subpath} = obj;
        const path = '/objects/';
        const createPath = path + subpath + '/new';
        const updatePath = path + subpath + '/:id';
        const listPath = path + subpath;

        objectRoutes.push(
            <Route key={createPath} path={createPath}>
                <CreateForm
                    label={objectType}
                    createMutation={createObject}
                    after={listPath}/>
            </Route>
        );

        objectRoutes.push(
            <Route key={updatePath} path={updatePath}>
                <UpdateForm
                    fetchQuery={fetchObject}
                    updateMutation={updateObject}
                    dataKey={'object'}
                    after={listPath}/>
            </Route>
        );

        objectRoutes.push(
            <Route key={listPath} path={listPath}>
                <ObjectList
                    label={label}
                    subpath={subpath}
                    objectType={objectType} />
            </Route>
        );
    });

    const collectionRoutes = [];
    collections.forEach(collection => {
        const {label, collectionType, subpath} = collection;
        const path = '/collections/';
        const createPath = path + subpath + '/new';
        const updatePath = path + subpath + '/:id';
        const listPath = path + subpath;

        collectionRoutes.push(
            <Route key={createPath} path={createPath}>
                <CreateForm
                    label={collectionType}
                    createMutation={createCollection}
                    after={listPath}/>
            </Route>
        );

        collectionRoutes.push(
            <Route key={updatePath} path={updatePath}>
                <UpdateForm
                    fetchQuery={fetchCollection}
                    updateMutation={updateCollection}
                    dataKey={'collection'}
                    after={listPath}/>
            </Route>
        );

        collectionRoutes.push(
            <Route key={listPath} path={listPath}>
                <CollectionList
                    label={label}
                    subpath={subpath}
                    collectionType={collectionType} />
            </Route>
        );

    });

    return (

                        <Paper className={classes.paper} p={1}>
                            <Switch>
                                <Route key={'externalDocuments'} path={'/externalDocuments'}>
                                    <ObjectList
                                        label={'External Document'}
                                        subpath={'externalDocuments'}
                                        objectType={'XtdExternalDocument'} />
                                </Route>
                                {objectRoutes}
                                {collectionRoutes}
                            </Switch>
                        </Paper>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}
