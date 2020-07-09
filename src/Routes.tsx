import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import StorageIcon from '@material-ui/icons/Storage';
import HomeIcon from '@material-ui/icons/Home';
import UserIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import {
    ActivityIcon,
    ActorIcon,
    ActsUponIcon,
    AssignsIcon,
    AssociatesIcon,
    BagIcon,
    ClassificationIcon,
    ClassifiesIcon,
    CollectsIcon,
    ComposesIcon,
    DocumentsIcon,
    ExternalDocumentIcon,
    FacetIcon,
    GroupsIcon,
    MeasureWithUnitIcon,
    NestIcon,
    PropertyIcon,
    SequencesIcon,
    SpecializesIcon,
    SubjectIcon,
    UnitIcon,
    ValueIcon
} from "./components/icons/icons";
import {EntityTypes} from "./generated/types";

export enum RouteCategory {
    NOOP,
    General,
    Object,
    Collection,
    Relationship,
    Association,
    Assignment
}

export interface RouteProperties {
    icon?: React.ReactNode,
    category: RouteCategory,
    title: string,
    description?: string,
    path: string,
    disabled?: boolean
}

export type EntityTypesKeys = keyof typeof EntityTypes;
export type EntityTypesMap = { [key in EntityTypesKeys]: RouteProperties };
export interface RoutesMap extends EntityTypesMap {
    home: RouteProperties,
    me: RouteProperties,
    account: RouteProperties,
    search: RouteProperties,
    graphiql: RouteProperties,
    Facet: RouteProperties,
}

const Routes: RoutesMap = {
    'home': {
        icon: <HomeIcon/>,
        category: RouteCategory.General,
        title: 'Home',
        path: ''
    },
    'me': {
        icon: <UserIcon/>,
        category: RouteCategory.General,
        title: 'Profile',
        path: 'me'
    },
    'account': {
        icon: <PeopleIcon/>,
        category: RouteCategory.General,
        title: 'Accounts',
        description: 'Manage user accounts',
        path: 'account'
    },
    'search': {
        icon: <SearchIcon/>,
        category: RouteCategory.General,
        title: 'Search',
        description: 'Search catalog for concepts and terms',
        path: 'search'
    },
    'graphiql': {
        icon: <StorageIcon/>,
        category: RouteCategory.General,
        title: 'GraphiQL',
        description: 'Interact with the datacat API via an in-browser IDE',
        path: 'graphiql'
    },
    'Facet': {
        icon: <FacetIcon/>,
        category: RouteCategory.General,
        title: 'Facet',
        description: 'Allow to tag catalog items',
        path: 'facets'
    },
    'XtdExternalDocument': {
        icon: <ExternalDocumentIcon/>,
        category: RouteCategory.General,
        title: 'External document',
        description: 'Externe Dokumente, Bücher oder schriftliche Informationen',
        path: 'externalDocuments'
    },
    'XtdRoot': {
        category: RouteCategory.NOOP,
        title: 'Root',
        path: '',
        disabled: true
    },
    'XtdObject': {
        category: RouteCategory.NOOP,
        title: 'Object',
        path: 'objects',
        disabled: true
    },
    'XtdActivity': {
        icon: <ActivityIcon/>,
        category: RouteCategory.Object,
        title: 'Activity',
        path: 'activities'
    },
    'XtdActor': {
        icon: <ActorIcon/>,
        category: RouteCategory.Object,
        title: 'Actor',
        path: 'actors'
    },
    'XtdClassification': {
        icon: <ClassificationIcon/>,
        category: RouteCategory.Object,
        title: 'Classification',
        path: 'classifications'
    },
    'XtdMeasureWithUnit': {
        icon: <MeasureWithUnitIcon/>,
        category: RouteCategory.Object,
        title: 'Measure',
        path: 'measures'
    },
    'XtdSubject': {
        icon: <SubjectIcon/>,
        category: RouteCategory.Object,
        title: 'Subject',
        path: 'subjects'
    },
    'XtdUnit': {
        icon: <UnitIcon/>,
        category: RouteCategory.Object,
        title: 'Unit',
        path: 'units'
    },
    'XtdProperty': {
        icon: <PropertyIcon/>,
        category: RouteCategory.Object,
        title: 'Property',
        path: 'properties'
    },
    'XtdValue': {
        icon: <ValueIcon/>,
        category: RouteCategory.Object,
        title: 'Value',
        path: 'values'
    },
    'XtdCollection': {
        category: RouteCategory.NOOP,
        title: 'Collection',
        path: 'collections',
        disabled: true
    },
    'XtdBag': {
        icon: <BagIcon/>,
        category: RouteCategory.Collection,
        title: 'Bag',
        path: 'bags'
    },
    'XtdNest': {
        icon: <NestIcon/>,
        category: RouteCategory.Collection,
        title: 'Nest',
        path: 'nests'
    },
    'XtdRelationship': {
        category: RouteCategory.NOOP,
        title: 'Relationship',
        path: 'relationships',
        disabled: true
    },
    'XtdRelDocuments': {
        icon: <DocumentsIcon/>,
        category: RouteCategory.Relationship,
        title: 'Documents',
        path: 'documents',
    },
    'XtdRelCollects': {
        icon: <CollectsIcon/>,
        category: RouteCategory.Relationship,
        title: 'Collects',
        path: 'collects'
    },
    'XtdRelAssignsCollections': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Collections',
        path: 'assignsCollections'
    },
    'XtdRelAssignsMeasures': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Measures',
        path: 'assignsMeasures',
        disabled: true
    },
    'XtdRelAssignsProperties': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Properties',
        path: 'assignsProperties',
        disabled: true
    },
    'XtdRelAssignsPropertyWithValues': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Property with values',
        path: 'assignsPropertyWithValues'
    },
    'XtdRelAssignsUnit': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Units',
        path: 'assignsUnit',
        disabled: true
    },
    'XtdRelAssociates': {
        icon: <AssociatesIcon/>,
        category: RouteCategory.Association,
        title: 'Associates',
        path: 'associates',
        disabled: true
    },
    'XtdRelGroups': {
        icon: <GroupsIcon/>,
        category: RouteCategory.Association,
        title: 'Groups',
        path: 'groups',
        disabled: true
    },
    'XtdRelSpecializes': {
        icon: <SpecializesIcon/>,
        category: RouteCategory.Association,
        title: 'Specializes',
        path: 'specializes',
        disabled: true
    },
    'XtdRelActsUpon': {
        icon: <ActsUponIcon/>,
        category: RouteCategory.Association,
        title: 'Acts upon',
        path: 'actsUpon',
        disabled: true
    },
    'XtdRelAssignsValues': {
        icon: <AssignsIcon/>,
        category: RouteCategory.Assignment,
        title: 'Values',
        path: 'assignsValues',
        disabled: true
    },
    'XtdRelClassifies': {
        icon: <ClassifiesIcon/>,
        category: RouteCategory.Relationship,
        title: 'Classifies',
        path: 'classifies',
        disabled: true
    },
    'XtdRelComposes': {
        icon: <ComposesIcon/>,
        category: RouteCategory.Association,
        title: 'Composes',
        path: 'composes',
        disabled: true
    },
    'XtdRelSequences': {
        icon: <SequencesIcon/>,
        category: RouteCategory.Relationship,
        title: 'Sequences',
        path: 'sequences',
        disabled: true
    }

}

export default Routes;

export type RouteEntry = [string, RouteProperties];

export type RouteEntryPredicate = (value: RouteEntry, index: number, array: RouteEntry[]) => unknown;

export function getRoutes({ categories, predicate }: { categories?: RouteCategory[], predicate?: RouteEntryPredicate }): RouteEntry[] {
    let entries: RouteEntry[] = Object.entries(Routes);
    if (categories) {
        entries = entries.filter(([, {category}]) => categories?.includes(category))
    }
    return (predicate ? entries.filter(predicate) : entries);
}

export function getAbsPath(x: keyof RoutesMap | RouteProperties): string {
    const route = (typeof x === 'string') ? Routes[x] : x;

    switch (route.category) {
        case RouteCategory.NOOP: return '';
        case RouteCategory.General: return `/${route.path}`;
        case RouteCategory.Object: return `/objects/${route.path}`;
        case RouteCategory.Collection: return `/collections/${route.path}`;
        case RouteCategory.Relationship:
        case RouteCategory.Assignment:
        case RouteCategory.Association: {
            return `/relationships/${route.path}`;
        }
    }
}

export function getCreatePath(x: keyof RoutesMap | RouteProperties): string {
    return `${getAbsPath(x)}/new`;
}

export function getUpdatePath(x: keyof RoutesMap | RouteProperties, id: string): string {
    return `${getAbsPath(x)}/${id}`;
}
