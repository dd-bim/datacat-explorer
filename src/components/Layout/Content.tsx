import {Route, Switch} from "react-router-dom";
import SearchView from "./SearchView";
import ExternalDocumentRoutes from "../../routes/ExternalDocumentRoutes";
import ActorRoutes from "../../routes/ActorRoutes";
import ActivityRoutes from "../../routes/ActivityRoutes";
import SubjectRoutes from "../../routes/SubjectRoutes";
import UnitRoutes from "../../routes/UnitRoutes";
import PropertyRoutes from "../../routes/PropertyRoutes";
import RelAssociatesRoutes from "../../routes/RelAssociatesRoutes";
import RelComposesRoutes from "../../routes/RelComposesRoutes";
import RelGroupsRoutes from "../../routes/RelGroupsRoutes";
import RelSpecializesRoutes from "../../routes/RelSpecializesRoutes";
import RelActsUponRoutes from "../../routes/RelActsUponRoutes";
import React from "react";
// @ts-ignore
import GraphiQL from "graphiql";
import "graphiql/graphiql.min.css";
import {useGraphiQLFetcher} from "../../hooks";
import BagRoutes from "../../routes/BagRoutes";

export default function Content() {
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
                <ExternalDocumentRoutes/>
            </Route>
            <Route path="/objects/actors">
                <ActorRoutes/>
            </Route>
            <Route path="/objects/activities">
                <ActivityRoutes/>
            </Route>
            <Route path="/objects/subjects">
                <SubjectRoutes/>
            </Route>
            <Route path="/objects/units">
                <UnitRoutes/>
            </Route>
            <Route path="/objects/properties">
                <PropertyRoutes/>
            </Route>
            <Route path="/collections/bags">
                <BagRoutes/>
            </Route>
            <Route path="/relationships/associates">
                <RelAssociatesRoutes/>
            </Route>
            <Route path="/relationships/composes">
                <RelComposesRoutes/>
            </Route>
            <Route path="/relationships/groups">
                <RelGroupsRoutes/>
            </Route>
            <Route path="/relationships/specializes">
                <RelSpecializesRoutes/>
            </Route>
            <Route path="/relationships/actsUpon">
                <RelActsUponRoutes/>
            </Route>
        </Switch>
    );
}
