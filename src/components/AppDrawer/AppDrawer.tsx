import * as React from 'react';
import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import AppDrawerItem from "./AppDrawerItem";
import {getAbsPath, getRoutes, RouteCategory, RouteEntry, RouteProperties} from "../../Routes";
import {Toolbar} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useAuthContext from "../../hooks/useAuthContext";

const useStyles = makeStyles(() => ({
    drawerContainer: {
        overflow: 'auto',
    }
}));

export default function AppDrawer(props: DrawerProps) {
    const classes = useStyles();
    const {hasRole} = useAuthContext();
    const isAdmin = hasRole('ADMIN');
    const compareFn = ([, a]: RouteEntry, [, b]: RouteEntry) => a.title.localeCompare(b.title);
    const general = getRoutes({ categories: [RouteCategory.General]});
    const admin = getRoutes({ categories: [RouteCategory.Admin]});
    const objects = getRoutes({ categories: [RouteCategory.Object] }).sort(compareFn);
    const collections = getRoutes({ categories: [RouteCategory.Collection]}).sort(compareFn);
    const relationships = getRoutes({ categories: [RouteCategory.Relationship]}).sort(compareFn);
    const associations = getRoutes({ categories: [RouteCategory.Association]}).sort(compareFn);
    const assignments = getRoutes({ categories: [RouteCategory.Assignment]}).sort(compareFn);
    const appDrawerItem = (route: RouteProperties) => {
        const {icon, title, description, path, disabled} = route;
        return (
            <AppDrawerItem
                key={path}
                icon={icon}
                primary={title}
                tooltip={description}
                to={getAbsPath(route)}
                disabled={disabled}
            />
        );
    };

    return (
        <Drawer {...props}>
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List dense>
                    <ListSubheader disableSticky>General</ListSubheader>
                    {general.map(([, props]) => appDrawerItem(props))}

                    {isAdmin && (
                        <React.Fragment>
                            <ListSubheader disableSticky>Admin</ListSubheader>
                            {admin.map(([, props]) => appDrawerItem(props))}
                        </React.Fragment>
                    )}

                    <ListSubheader disableSticky>Objects</ListSubheader>
                    {objects.map(([, props]) => appDrawerItem(props))}

                    <ListSubheader disableSticky>Collections</ListSubheader>
                    {collections.map(([, props]) => appDrawerItem(props))}

                    <ListSubheader disableSticky>Relationships</ListSubheader>
                    {relationships.map(([, props]) => appDrawerItem(props))}

                    <ListSubheader disableSticky>Associations</ListSubheader>
                    {associations.map(([, props]) => appDrawerItem(props))}

                    <ListSubheader disableSticky>Assignments</ListSubheader>
                    {assignments.map(([, props]) => appDrawerItem(props))}
                    {/*<AppDrawerItem*/}
                    {/*    icon={<SearchIcon />}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path={"/"}*/}
                    {/*    secondary={"Freie Suche über den gesamten Datenbestand des Katalogs"}*/}
                    {/*    title={"Search"}*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    icon={<StorageIcon />}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path={"/graphiql"}*/}
                    {/*    secondary={"GraphQL-Abfrageoberfläche"}*/}
                    {/*    title={"GraphiQL"}*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/externalDocuments/new'}*/}
                    {/*    icon={<ExternalDocumentIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/externalDocuments"*/}
                    {/*    secondary={"Externe Dokumente, Bücher oder schriftliche Informationen"}*/}
                    {/*    title={"Externe Dokumente"}*/}
                    {/*/>*/}


                    {/*<AppDrawerItem*/}
                    {/*    create={'/objects/activities/new'}*/}
                    {/*    icon={<ActivityIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path={'/objects/activities'}*/}
                    {/*    secondary={"Aktivitäten oder Prozesse, die auf Subjekte verändern"}*/}
                    {/*    title={"Aktivitäten"}*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/objects/actors/new'}*/}
                    {/*    icon={<ActorIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path={"/objects/actors"}*/}
                    {/*    secondary={"Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt"}*/}
                    {/*    title={"Akteure"}*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/objects/subjects/new'}*/}
                    {/*    icon={<SubjectIcon />}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/objects/subjects"*/}
                    {/*    secondary="Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden"*/}
                    {/*    title="Subjekte"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/objects/units/new'}*/}
                    {/*    icon={<UnitIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/objects/units"*/}
                    {/*    secondary="Skale, anhand derer eine Wert gemessen werden kann"*/}
                    {/*    title="Einheiten"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/objects/properties/new'*/}
                    {/*    icon={<PropertyIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/objects/properties"*/}
                    {/*    secondary="Eigenschaften, anhand derer Objekte qualifiziert oder quantifiziert werden können"*/}
                    {/*    title="Merkmale"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/objects/measures/new'*/}
                    {/*    icon={<MeasureWithUnitIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/objects/measures"*/}
                    {/*    secondary="Macht Merkmale messbar, indem Werte mit Einheiten in Bezug gebracht werden"*/}
                    {/*    title="Bemaßung"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/objects/values/new'}*/}
                    {/*    icon={<ValueIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/objects/values"*/}
                    {/*    secondary="Beschreibt die konkrete Ausprägung, die ein Merkmal annehmen kann"*/}
                    {/*    title="Werte"*/}
                    {/*/>*/}


                    {/*<AppDrawerItem*/}
                    {/*    create='/collections/bags/new'*/}
                    {/*    icon={<BagIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/collections/bags"*/}
                    {/*    secondary="Sammlungen beliebiger Objekte"*/}
                    {/*    title="Tasche"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/collections/nests/new'}*/}
                    {/*    icon={<NestIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/collections/nests"*/}
                    {/*    secondary="Sammlungen gleicher Objekte"*/}
                    {/*    title="Nest"*/}
                    {/*/>*/}

                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/documents/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<DocumentsIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/relationships/documents"*/}
                    {/*    secondary="Verlinkung eines Konzepts zu einer weiterführenden Dokumentation"*/}
                    {/*    title="Dokumentationen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/relationships/collects/new'}*/}
                    {/*    icon={<CollectsIcon />}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/relationships/collects"*/}
                    {/*    secondary="Beziehungen beliebiger Objekte zu einer Sammlung"*/}
                    {/*    title="Sammlungen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/assignsCollections/new'*/}
                    {/*    path="/relationships/assignsCollections"*/}
                    {/*    secondary="Zuweisung von Sammlungen zu einem Objekt"*/}
                    {/*    title="Sammlungszuweisungen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/assignsProperties/new'*/}
                    {/*    disabled*/}
                    {/*    path="/relationships/assignsProperties"*/}
                    {/*    secondary="Zuweisung von Merkmalen zu einem Objekt"*/}
                    {/*    title="Einfache Merkmalszuweisungen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/assignsPropertiesWithValues/new'*/}
                    {/*    disabled*/}
                    {/*    path="/relationships/assignsPropertiesWithValues"*/}
                    {/*    secondary="Zuweisung von Merkmalen zu einem Objekt"*/}
                    {/*    title="Komplexe Merkmalszuweisung"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/sequences/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<SequencesIcon/>}*/}
                    {/*    path="/relationships/sequences"*/}
                    {/*    secondary="Abfolge von Aktivitäten"*/}
                    {/*    title="Sequenz"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/associates/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<AssociatesRelationIcon/>}*/}
                    {/*    path="/relationships/associates"*/}
                    {/*    secondary="Beziehungen beliebiger Sammlungen zu einem Objekt"*/}
                    {/*    title="Assoziationen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/composes/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<ComposesIcon/>}*/}
                    {/*    path="/relationships/composes"*/}
                    {/*    secondary="Komposition eines Konzepts durch eine Menge anderer Konzepte"*/}
                    {/*    title="Komposition"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/groups/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<GroupsIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/relationships/groups"*/}
                    {/*    secondary="Gruppierungen einer Menge von Objekten in einem Objekt"*/}
                    {/*    title="Gruppierungen"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create='/relationships/specializes/new'*/}
                    {/*    disabled*/}
                    {/*    icon={<SpecializesIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/relationships/specializes"*/}
                    {/*    secondary="Spezialisierung eines Konzepts durch eine Menge anderer Konzepte"*/}
                    {/*    title="Spezialisierung"*/}
                    {/*/>*/}
                    {/*<AppDrawerItem*/}
                    {/*    create={'/relationships/actsUpon/new'}*/}
                    {/*    disabled*/}
                    {/*    icon={<ActsUponIcon/>}*/}
                    {/*    onClick={onClose}*/}
                    {/*    path="/relationships/actsUpon"*/}
                    {/*    secondary="Einflussnahme eines Konzepts auf eine Menge anderer Konzepte"*/}
                    {/*    title="Einflussnahme"*/}
                    {/*/>*/}
                </List>
            </div>
        </Drawer>
    );
}
