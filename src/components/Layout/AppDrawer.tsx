import * as React from 'react';
import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import DocumentIcon from '../documents/DocumentIcon';
import SubjectIcon from '../icons/SubjectIcon';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
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
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AddIconButton from "../button/AddIconButton";
import SearchIcon from "@material-ui/icons/Search";
import StorageIcon from '@material-ui/icons/Storage';

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
    const history = useHistory();
    const {open, onClose} = props;

    const handleOnAddClick = (target: string) => {
        history.push(target);
        onClose();
    }

    return (
        <Drawer
            open={open}
            onClose={onClose}
            className={classes.root}
            variant={'temporary'}
            classes={{paper: classes.drawerPaper}}
        >
            <List>

                <ListItem button component={RouterLink} to="/" onClick={onClose}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search" secondary="Freie Suche über den gesamten Datenbestand des Katalogs" />
                </ListItem>

                <ListItem button component={RouterLink} to="/graphiql" onClick={onClose}>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="GraphiQL"
                        secondary="GraphQL-Abfrageoberfläche"
                    />
                </ListItem>

                <ListItem button component={RouterLink} to="/documents" onClick={onClose}>
                    <ListItemIcon>
                        <DocumentIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Externe Dokumente"
                        secondary="Externe Dokumente, Bücher oder schriftliche Informationen"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton
                            edge="end"
                            aria-label="add new"
                            onClick={() => handleOnAddClick('/documents/new')}
                        />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListSubheader disableSticky>Objekte</ListSubheader>

                <ListItem button component={RouterLink} to="/objects/activities" onClick={onClose}>
                    <ListItemIcon>
                        <ActivityIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Aktivitäten"
                        secondary="Aktivitäten oder Prozesse, die auf Subjekte verändern"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/objects/activities/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/objects/actors" onClick={onClose}>
                    <ListItemIcon>
                        <ActorIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Akteure"
                        secondary="Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/objects/actors/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/objects/subjects" onClick={onClose}>
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Subjekte"
                        secondary="Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/objects/subjects/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/objects/units" onClick={onClose}>
                    <ListItemIcon>
                        <UnitIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Einheiten"
                        secondary="Skale, anhand derer eine Wert gemessen werden kann"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/objects/units/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/objects/properties" onClick={onClose}>
                    <ListItemIcon>
                        <PropertyIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Merkmale"
                        secondary="Eigenschaften, anhand derer Objekte qualifiziert oder quantifiziert werden können"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/objects/properties/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListSubheader disableSticky>Sammlungen</ListSubheader>
                <ListItem button component={RouterLink} to="/collections/bags" disabled>
                    <ListItemIcon>
                        <BagIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Tasche"
                        secondary="Sammlungen beliebiger Objekte"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/collections/bags/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="collections/nests" disabled>
                    <ListItemIcon>
                        <NestIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Nest"
                        secondary="Sammlungen gleicher Objekte"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/collections/nests/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListSubheader disableSticky>Beziehungen</ListSubheader>

                <ListItem button component={RouterLink} to="/relationships/documents" disabled>
                    <ListItemIcon>
                        <DocumentIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Dokumentationen"
                        secondary="Verlinkung eines Konzepts zu einer weiterführenden Dokumentation"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/documents/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/collects" disabled>
                    <ListItemIcon>
                        <CollectsIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Sammlungen"
                        secondary="Beziehungen beliebiger Objekte zu einer Sammlung"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/collects/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/associates">
                    <ListItemIcon>
                        <AssociatesRelationIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Assoziationen"
                        secondary="Beziehungen beliebiger Sammlungen zu einem Objekt"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/associates/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/composes">
                    <ListItemIcon>
                        <ComposesIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Komposition"
                        secondary="Komposition eines Konzepts durch eine Menge anderer Konzepte"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/composes/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/groups" onClick={onClose}>
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Gruppierungen"
                        secondary="Gruppierungen einer Menge von Objekten in einem Objekt"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/groups/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/specializes" onClick={onClose}>
                    <ListItemIcon>
                        <SpecializesIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Spezialisierung"
                        secondary="Spezialisierung eines Konzepts durch eine Menge anderer Konzepte"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/specializes/new')} />
                    </ListItemSecondaryAction>
                </ListItem>

                <ListItem button component={RouterLink} to="/relationships/actsUpon" onClick={onClose}>
                    <ListItemIcon>
                        <ActsUponIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Einflussnahme"
                        secondary="Einflussnahme eines Konzepts auf eine Menge anderer Konzepte"
                    />
                    <ListItemSecondaryAction>
                        <AddIconButton edge="end" aria-label="add new" onClick={() => handleOnAddClick('/relationships/actsUpon/new')} />
                    </ListItemSecondaryAction>
                </ListItem>


                {/*<AppDrawerItem to="/relationships/collects" icon={} label="Sammlungen">*/}
                {/*    Beziehungen beliebiger Objekte zu einer Sammlung*/}
                {/*</AppDrawerItem>*/}
                {/*<AppDrawerItem to="/relationships/specializes" label="Spezialisierungen">*/}
                {/*    Verbindungen eines Objekts zu einer Menge anderer Objekte*/}
                {/*</AppDrawerItem>*/}
                {/*<AppDrawerItem>*/}
                {/*    <ListItemText primary={"Zusammensetzungen"} secondary={"Verbindungen eines Objekts zu einer Menge anderer Objekte"} />*/}
                {/*</ListItem>*/}
                {/*<AppDrawerItem>*/}
                {/*    <ListItemText primary={"Handlungen"} secondary={"Verbindungen eines Objekts zu einer Menge anderer Objekte"} />*/}
                {/*</ListItem>*/}
                {/*<AppDrawerItem>*/}
                {/*    <ListItemText primary={"Zuordnungen von Merkmalen"} secondary={"Verbindungen eines Objekts zu einer Menge anderer Objekte"} />*/}
                {/*</ListItem>*/}

            </List>
        </Drawer>
    );
}
