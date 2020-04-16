import * as React from 'react';
import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import DocumentIcon from '../documents/DocumentIcon';
import SubjectIcon from '../icons/SubjectIcon';
import {Link as RouterLink} from 'react-router-dom';
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

interface AppDrawerProps extends DrawerProps {
  drawerWidth?: number;
}

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
      <List dense>

        <ListItem button component={RouterLink} to="/documents">
          <ListItemIcon>
            <DocumentIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Externe Dokumente"
            secondary="Externe Dokumente, Bücher oder schriftliche Informationen"
          />
        </ListItem>

        <ListSubheader disableSticky>Objekte</ListSubheader>

        <ListItem button component={RouterLink} to="/objects/activities">
          <ListItemIcon>
            <ActivityIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Aktivitäten"
            secondary="Aktivitäten oder Prozesse, die auf Subjekte verändern"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/objects/actors">
          <ListItemIcon>
            <ActorIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Akteure"
            secondary="Mittler, der im Rahmen einer Aktivität auf ein Subjekt Einfluss nimmt"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/objects/subjects">
          <ListItemIcon>
            <SubjectIcon />
          </ListItemIcon>
          <ListItemText
            primary="Subjekte"
            secondary="Physische oder logische Konzepte, die durch zugeordnete Merkmale und Aktivitäten näher beschrieben werden"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/objects/units" disabled>
          <ListItemIcon>
            <UnitIcon />
          </ListItemIcon>
          <ListItemText
            primary="Einheiten"
            secondary="Skale, anhand derer eine Wert gemessen werden kann"
          />
        </ListItem>

        <ListSubheader disableSticky>Sammlungen</ListSubheader>
        <ListItem button component={RouterLink} to="collections/bags" disabled>
          <ListItemIcon>
            <BagIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Tasche"
            secondary="Sammlungen beliebiger Objekte"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="collections/nests" disabled>
          <ListItemIcon>
            <NestIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Nest"
            secondary="Sammlungen gleicher Objekte"
          />
        </ListItem>

        <ListSubheader disableSticky>Beziehungen</ListSubheader>

        <ListItem button component={RouterLink} to="collections/nests" disabled>
          <ListItemIcon>
            <DocumentIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Dokumentationen"
            secondary="Verlinkung eines Konzepts zu einer weiterführenden Dokumentation"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/relationships/collects" disabled>
          <ListItemIcon>
            <CollectsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Sammlungen"
            secondary="Beziehungen beliebiger Objekte zu einer Sammlung"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="relationships/associates" disabled>
          <ListItemIcon>
            <AssociatesRelationIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Assoziationen"
            secondary="Beziehungen beliebiger Sammlungen zu einem Objekt"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/relationships/composes" disabled>
          <ListItemIcon>
            <ComposesIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Komposition"
            secondary="Komposition eines Konzepts durch eine Menge anderer Konzepte"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/relationships/groups">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Gruppierungen"
            secondary="Gruppierungen einer Menge von Objekten in einem Objekt"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/relationships/specializes" disabled>
          <ListItemIcon>
            <SpecializesIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Spezialisierung"
            secondary="Spezialisierung eines Konzepts durch eine Menge anderer Konzepte"
          />
        </ListItem>

        <ListItem button component={RouterLink} to="/relationships/actsUpon" disabled>
          <ListItemIcon>
            <ActsUponIcon/>
          </ListItemIcon>
          <ListItemText
            primary="Einflussnahme"
            secondary="Einflussnahme eines Konzepts auf eine Menge anderer Konzepte"
          />
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
