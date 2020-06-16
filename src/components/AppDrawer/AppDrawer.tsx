import * as React from 'react';
import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import SubjectIcon from '../icons/SubjectIcon';
import ActivityIcon from "../icons/ActivityIcon";
import NestIcon from "../icons/NestIcon";
import ActorIcon from "../icons/ActorIcon";
import AssociatesRelationIcon from "../icons/AssociatesIcon";
import SpecializesIcon from "../icons/SpecializesIcon";
import ComposesIcon from "../icons/ComposesIcon";
import CollectsIcon from "../icons/CollectsIcon";
import ActsUponIcon from "../icons/ActsUponIcon";
import UnitIcon from "../icons/UnitIcon";
import BagIcon from "../icons/BagIcon";
import GroupsIcon from "../icons/GroupsIcon";
import PropertyIcon from "../icons/PropertyIcon";
import SearchIcon from "@material-ui/icons/Search";
import StorageIcon from '@material-ui/icons/Storage';
import ValueIcon from "../icons/ValueIcon";
import MeasureWithUnitIcon from "../icons/MeasureWithUnitIcon";
import SequencesIcon from "../icons/SequencesIcon";
import ExternalDocumentIcon from "../icons/ExternalDocumentIcon";
import DocumentsIcon from "../icons/DocumentsIcon";
import AppDrawerItem from "./AppDrawerItem";

const defaultDrawerWidth = 250;
const widthProperty = ({drawerWidth = defaultDrawerWidth}: AppDrawerProps) => drawerWidth;

const useStyles = makeStyles(() => ({
    root: {
        width: widthProperty,
    },
    drawerPaper: {
        width: widthProperty,
    },
}));

interface AppDrawerProps extends DrawerProps {
    onClose: () => void;
    drawerWidth?: number;
}

export default function AppDrawer(props: AppDrawerProps) {
    const classes = useStyles(props);
    const {open, onClose} = props;

    return (
        <Drawer
            open={open}
            onClose={onClose}
            className={classes.root}
            variant={'temporary'}
            classes={{paper: classes.drawerPaper}}
        >
            <List>
                <ListSubheader disableSticky>Allgemein</ListSubheader>
                <AppDrawerItem
                    icon={<SearchIcon />}
                    onClick={onClose}
                    route={"/"}
                    subtitle={"Freie Suche über den gesamten Datenbestand des Katalogs"}
                    title={"Search"}
                />
                <AppDrawerItem
                    icon={<StorageIcon />}
                    onClick={onClose}
                    route={"/graphiql"}
                    subtitle={"GraphQL-Abfrageoberfläche"}
                    title={"GraphiQL"}
                />
                <AppDrawerItem
                    addRoute={'/externalDocuments/new'}
                    icon={<ExternalDocumentIcon/>}
                    onClick={onClose}
                    route="/externalDocuments"
                    subtitle={"Externe Dokumente, Bücher oder schriftliche Informationen"}
                    title={"Externe Dokumente"}
                />

                <ListSubheader disableSticky>Objekte</ListSubheader>
                <AppDrawerItem
                    addRoute={'/objects/activities/new'}
                    icon={<ActivityIcon/>}
                    onClick={onClose}
                    route={'/objects/activities'}
                    subtitle={"Aktivitäten oder Prozesse, die auf Subjekte verändern"}
                    title={"Aktivitäten"}
                />
                <AppDrawerItem
                    addRoute={'/objects/actors/new'}
                    icon={<ActorIcon/>}
                    onClick={onClose}
                    route={"/objects/actors"}
                    subtitle={"Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt"}
                    title={"Akteure"}
                />
                <AppDrawerItem
                    addRoute={'/objects/subjects/new'}
                    icon={<SubjectIcon />}
                    onClick={onClose}
                    route="/objects/subjects"
                    subtitle="Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden"
                    title="Subjekte"
                />
                <AppDrawerItem
                    addRoute={'/objects/units/new'}
                    icon={<UnitIcon/>}
                    onClick={onClose}
                    route="/objects/units"
                    subtitle="Skale, anhand derer eine Wert gemessen werden kann"
                    title="Einheiten"
                />
                <AppDrawerItem
                    addRoute='/objects/properties/new'
                    icon={<PropertyIcon/>}
                    onClick={onClose}
                    route="/objects/properties"
                    subtitle="Eigenschaften, anhand derer Objekte qualifiziert oder quantifiziert werden können"
                    title="Merkmale"
                />
                <AppDrawerItem
                    addRoute='/objects/measures/new'
                    icon={<MeasureWithUnitIcon/>}
                    onClick={onClose}
                    route="/objects/measures"
                    subtitle="Macht Merkmale messbar, indem Werte mit Einheiten in Bezug gebracht werden"
                    title="Bemaßung"
                />
                <AppDrawerItem
                    addRoute={'/objects/values/new'}
                    icon={<ValueIcon/>}
                    onClick={onClose}
                    route="/objects/values"
                    subtitle="Beschreibt die konkrete Ausprägung, die ein Merkmal annehmen kann"
                    title="Werte"
                />

                <ListSubheader disableSticky>Sammlungen</ListSubheader>
                <AppDrawerItem
                    addRoute='/collections/bags/new'
                    icon={<BagIcon/>}
                    onClick={onClose}
                    route="/collections/bags"
                    subtitle="Sammlungen beliebiger Objekte"
                    title="Tasche"
                />
                <AppDrawerItem
                    addRoute={'/collections/nests/new'}
                    icon={<NestIcon/>}
                    onClick={onClose}
                    route="/collections/nests"
                    subtitle="Sammlungen gleicher Objekte"
                    title="Nest"
                />

                <ListSubheader disableSticky>Beziehungen</ListSubheader>
                <AppDrawerItem
                    addRoute='/relationships/documents/new'
                    disabled
                    icon={<DocumentsIcon/>}
                    onClick={onClose}
                    route="/relationships/documents"
                    subtitle="Verlinkung eines Konzepts zu einer weiterführenden Dokumentation"
                    title="Dokumentationen"
                />
                <AppDrawerItem
                    addRoute={'/relationships/collects/new'}
                    disabled
                    icon={<CollectsIcon />}
                    onClick={onClose}
                    route="/relationships/collects"
                    subtitle="Beziehungen beliebiger Objekte zu einer Sammlung"
                    title="Sammlungen"
                />
                <AppDrawerItem
                    addRoute='/relationships/assignsCollections/new'
                    disabled
                    route="/relationships/assignsCollections"
                    subtitle="Zuweisung von Sammlungen zu einem Objekt"
                    title="Sammlungszuweisungen"
                />
                <AppDrawerItem
                    addRoute='/relationships/assignsProperties/new'
                    disabled
                    route="/relationships/assignsProperties"
                    subtitle="Zuweisung von Merkmalen zu einem Objekt"
                    title="Einfache Merkmalszuweisungen"
                />
                <AppDrawerItem
                    addRoute='/relationships/assignsPropertiesWithValues/new'
                    disabled
                    route="/relationships/assignsPropertiesWithValues"
                    subtitle="Zuweisung von Merkmalen zu einem Objekt"
                    title="Komplexe Merkmalszuweisung"
                />
                <AppDrawerItem
                    addRoute='/relationships/sequences/new'
                    disabled
                    icon={<SequencesIcon/>}
                    route="/relationships/sequences"
                    subtitle="Abfolge von Aktivitäten"
                    title="Sequenz"
                />
                <AppDrawerItem
                    addRoute='/relationships/associates/new'
                    disabled
                    icon={<AssociatesRelationIcon/>}
                    route="/relationships/associates"
                    subtitle="Beziehungen beliebiger Sammlungen zu einem Objekt"
                    title="Assoziationen"
                />
                <AppDrawerItem
                    addRoute='/relationships/composes/new'
                    disabled
                    icon={<ComposesIcon/>}
                    route="/relationships/composes"
                    subtitle="Komposition eines Konzepts durch eine Menge anderer Konzepte"
                    title="Komposition"
                />
                <AppDrawerItem
                    addRoute='/relationships/groups/new'
                    disabled
                    icon={<GroupsIcon/>}
                    onClick={onClose}
                    route="/relationships/groups"
                    subtitle="Gruppierungen einer Menge von Objekten in einem Objekt"
                    title="Gruppierungen"
                />
                <AppDrawerItem
                    addRoute='/relationships/specializes/new'
                    disabled
                    icon={<SpecializesIcon/>}
                    onClick={onClose}
                    route="/relationships/specializes"
                    subtitle="Spezialisierung eines Konzepts durch eine Menge anderer Konzepte"
                    title="Spezialisierung"
                />
                <AppDrawerItem
                    addRoute={'/relationships/actsUpon/new'}
                    disabled
                    icon={<ActsUponIcon/>}
                    onClick={onClose}
                    route="/relationships/actsUpon"
                    subtitle="Einflussnahme eines Konzepts auf eine Menge anderer Konzepte"
                    title="Einflussnahme"
                />
            </List>
        </Drawer>
    );
}
