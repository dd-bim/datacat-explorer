import {Route, Switch} from "react-router-dom";
import SearchView from "../Search/SearchView";
import React from "react";
// @ts-ignore
import GraphiQL from "graphiql";
import "graphiql/graphiql.min.css";
import {useGraphiQLFetcher} from "../../hooks";
import ExternalDocumentViews from "../ExternalDocument/ExternalDocumentViews";
import SubjectViews from "../Subject/SubjectViews";
import ActivityViews from "../Activity/ActivityViews";
import ActorViews from "../Actor/ActorViews";
import UnitViews from "../Unit/UnitViews";
import PropertyViews from "../Property/PropertyViews";
import ValueViews from "../Value/ValueViews";
import MeasureViews from "../Measure/MeasureViews";
import BagViews from "../Bag/BagViews";
import NestViews from "../Nest/NestViews";
import CollectsViews from "../Collects/CollectsViews";
import AssignsCollectionsViews from "../AssignsCollections/AssignsCollectionsViews";
import StatisticsView from "../Catalog/StatisticsView";
import ViewWrapper from "../View/ViewWrapper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ClassificationViews from "../Classification/ClassificationViews";
import DocumentsViews from "../Documents/DocumentsViews";
import AssignsPropertyWithValuesViews from "../AssignsPropertyWithValues/AssignsPropertyWithValuesViews";
import FacetViews from "../Facet/FacetViews";

const useStyles = makeStyles(theme => ({
    graphiql: {
        minHeight: `calc(100vh - ${64 + (theme.spacing(3) * 2) }px)`
    }
}));

export default function Router() {
    const classes = useStyles();
    const graphiqlFetcher = useGraphiQLFetcher();

    return (
        <Switch>
            <Route path="/" exact>
                <StatisticsView/>
            </Route>
            <Route path="/search" exact>
                <SearchView/>
            </Route>
            <Route path="/graphiql" exact>
                <ViewWrapper className={classes.graphiql}>
                    <GraphiQL fetcher={graphiqlFetcher}/>
                </ViewWrapper>
            </Route>
            <Route path="/facets">
                <FacetViews/>
            </Route>
            <Route path="/externalDocuments">
                <ExternalDocumentViews/>
            </Route>
            <Route path="/objects/activities">
                <ActivityViews/>
            </Route>
            <Route path="/objects/actors">
                <ActorViews/>
            </Route>
            <Route path="/objects/subjects">
                <SubjectViews/>
            </Route>
            <Route path="/objects/classifications">
                <ClassificationViews/>
            </Route>
            <Route path="/objects/units">
                <UnitViews/>
            </Route>
            <Route path="/objects/properties">
                <PropertyViews/>
            </Route>
            <Route path="/objects/values">
                <ValueViews/>
            </Route>
            <Route path="/objects/measures">
                <MeasureViews/>
            </Route>
            <Route path="/collections/bags">
                <BagViews/>
            </Route>
            <Route path="/collections/nests">
                <NestViews/>
            </Route>
            <Route path="/relationships/documents">
                <DocumentsViews/>
            </Route>
            <Route path="/relationships/collects">
                <CollectsViews/>
            </Route>
            <Route path="/relationships/assignsCollections">
                <AssignsCollectionsViews/>
            </Route>
            <Route path="/relationships/assignsPropertyWithValues">
                <AssignsPropertyWithValuesViews/>
            </Route>
            {/*<Route path="/relationships/associates">*/}
            {/*    <RelAssociatesRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/composes">*/}
            {/*    <RelComposesRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/groups">*/}
            {/*    <RelGroupsRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/specializes">*/}
            {/*    <RelSpecializesRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/actsUpon">*/}
            {/*    <RelActsUponRoutes/>*/}
            {/*</Route>*/}
        </Switch>
    );
}
