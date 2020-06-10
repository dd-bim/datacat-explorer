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

export default function Router() {
    const graphiqlFetcher = useGraphiQLFetcher();

    return (
        <Switch>
            <Route path="/" exact>
                <SearchView/>
            </Route>
            <Route path="/graphiql" exact>
                <GraphiQL fetcher={graphiqlFetcher}/>
            </Route>
            <Route path="/externalDocuments">
                <ExternalDocumentViews/>
            </Route>
            {/*<Route path="/objects/actors">*/}
            {/*    <ActorRoutes/>*/}
            {/*</Route>*/}
            <Route path="/objects/activities">
                <ActivityViews/>
            </Route>
            <Route path="/objects/subjects">
                <SubjectViews/>
            </Route>
            {/*<Route path="/objects/units">*/}
            {/*    <UnitRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/objects/properties">*/}
            {/*    <PropertyRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/collections/bags">*/}
            {/*    <BagRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/collections/nests">*/}
            {/*    <NestRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/documents">*/}
            {/*    <RelDocumentsRoutes/>*/}
            {/*</Route>*/}
            {/*<Route path="/relationships/collects">*/}
            {/*    <RelCollectsRoutes/>*/}
            {/*</Route>*/}
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
