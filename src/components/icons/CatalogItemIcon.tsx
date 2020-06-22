import React from "react";
import {
    ActivityIcon,
    ActorIcon,
    AssociatesIcon,
    BagIcon,
    ClassificationIcon,
    CollectsIcon,
    DocumentsIcon,
    ExternalDocumentIcon,
    GroupsIcon,
    MeasureWithUnitIcon,
    NestIcon,
    PropertyIcon,
    SubjectIcon,
    UnitIcon,
    ValueIcon
} from "./icons";
import {SvgIconProps} from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {EntityTypes} from "../../generated/types";

interface CatalogItemIconProps {
    itemType?: keyof typeof EntityTypes;
}

export default function CatalogItemIcon(props: CatalogItemIconProps & SvgIconProps) {
    const {itemType, ...otherProps} = props;

    switch (itemType) {
        case 'XtdExternalDocument':
            return <ExternalDocumentIcon {...otherProps} />;
        case 'XtdActivity':
            return <ActivityIcon {...otherProps} />;
        case 'XtdActor':
            return <ActorIcon {...otherProps} />;
        case 'XtdClassification':
            return <ClassificationIcon {...otherProps} />;
        case "XtdMeasureWithUnit":
            return <MeasureWithUnitIcon {...otherProps} />;
        case 'XtdSubject':
            return <SubjectIcon {...otherProps} />;
        case 'XtdUnit':
            return <UnitIcon {...otherProps} />;
        case 'XtdValue':
            return <ValueIcon {...otherProps} />;
        case 'XtdProperty':
            return <PropertyIcon {...otherProps} />;
        case 'XtdBag':
            return <BagIcon {...otherProps} />;
        case 'XtdNest':
            return <NestIcon {...otherProps} />;
        case 'XtdRelDocuments':
            return <DocumentsIcon {...otherProps} />;
        case 'XtdRelCollects':
            return <CollectsIcon {...otherProps} />;
        case 'XtdRelAssociates':
            return <AssociatesIcon {...otherProps} />;
        case 'XtdRelGroups':
            return <GroupsIcon {...otherProps} />;
        default:
            return <ErrorOutlineIcon {...otherProps} />;
    }
}
