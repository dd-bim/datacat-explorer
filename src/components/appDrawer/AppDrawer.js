import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {makeStyles} from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import AppDrawerItem from './AppDrawerItem';
import DocumentIcon from '../documents/DocumentIcon';
import SubjectIcon from '../subjects/SubjectIcon';
import RelGroupsIcon from '../groupsRelationships/RelGroupsIcon';
import DocumentsRelationIcon from '../documentsRelation/DocumentsRelationIcon';
import {
    ActivityIcon,
    ActorIcon,
    AssociatesRelationIcon,
    BagIcon,
    CollectsIcon,
    NestIcon,
    UnitIcon,
} from '../EntityIcon';
import {Link as RouterLink} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import {ExpandLess, ExpandMore} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        width: props => props.drawerWidth,
    },
    drawerPaper: {
        width: props => props.drawerWidth,
    },
}));


export default function AppDrawer(props) {
    const classes = useStyles(props);
    const {open, onClose} = props;
    const [associatesOpen, setAssociatesOpen] = useState(false);

    return (
        <Drawer open={open} onClose={onClose} className={classes.root} variant={'temporary'} classes={{paper: classes.drawerPaper}}>
            <List dense={true}>
                <ListItem button component={RouterLink} to="/documents">
                    <ListItemIcon>
                        <DocumentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Externe Dokumente" secondary="Externe Dokumente, Bücher oder schriftliche Informationen" />
                </ListItem>

                <ListSubheader disableSticky={true}>Objekte</ListSubheader>
                <ListItem button component={RouterLink} to="/objects/activities" disabled={true}>
                    <ListItemIcon>
                        <ActivityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Aktivitäten" secondary="Aktivitäten oder Prozesse, die auf Subjekte verändern" />
                </ListItem>
                <ListItem button component={RouterLink} to="/objects/actors" disabled={true}>
                    <ListItemIcon>
                        <ActorIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Akteure" secondary="Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt" />
                </ListItem>
                <AppDrawerItem to="/objects/subjects" icon={<SubjectIcon/>} label="Subjekte">
                    Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden
                </AppDrawerItem>
                <AppDrawerItem to="/objects/units" icon={<UnitIcon/>} label="Einheiten" disabled={true}>
                    Skale, anhand derer eine Wert gemessen werden kann
                </AppDrawerItem>


                <ListSubheader disableSticky={true}>Sammlungen</ListSubheader>
                <ListItem button component={RouterLink} to="collections/bags" disabled={true}>
                    <ListItemIcon>
                        <BagIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tasche" secondary="Sammlungen beliebiger Objekte" />
                </ListItem>
                <ListItem button component={RouterLink} to="collections/nests" disabled={true}>
                    <ListItemIcon>
                        <NestIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nest" secondary="Sammlungen gleicher Objekte" />
                </ListItem>

                <ListSubheader disableSticky={true}>Beziehungen</ListSubheader>
                <AppDrawerItem to="/relationships/documents" icon={<DocumentsRelationIcon/>} label="Dokumentationen" disabled={true}>
                    Verlinkung eines Konzepts zu einer weiterführenden Dokumentation
                </AppDrawerItem>

                <AppDrawerItem to="/relationships/collects" icon={<CollectsIcon/>} label="Sammlungen" disabled={true}>
                    Beziehungen beliebiger Objekte zu einer Sammlung
                </AppDrawerItem>

                <ListItem button component={RouterLink} to="relationships/associates" disabled={true}>
                    <ListItemIcon>
                        <AssociatesRelationIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Assoziationen" secondary="Beziehungen beliebiger Sammlungen zu einem Objekt" />
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => setAssociatesOpen(!associatesOpen)}>
                            {associatesOpen ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>

                <Collapse in={associatesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <AppDrawerItem to="/relationships/groups" icon={<RelGroupsIcon/>} label="Gruppierungen">
                            Gruppierungen einer Menge von Objekten in einem Objekt
                        </AppDrawerItem>
                    </List>
                </Collapse>

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
