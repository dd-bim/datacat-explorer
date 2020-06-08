import {SvgIconProps} from "@material-ui/core";
import SubjectIcon from "./SubjectIcon";
import React from "react";
import ActivityIcon from "./ActivityIcon";
import ActorIcon from "./ActorIcon";
import BagIcon from "./BagIcon";
import NestIcon from "./NestIcon";
import GroupsIcon from "./GroupsIcon";
import ExternalDocumentIcon from "./ExternalDocumentIcon";
import UnitIcon from "./UnitIcon";
import PropertyIcon from "./PropertyIcon";
import AssociatesIcon from "./AssociatesIcon";
import DocumentsIcon from "./DocumentsIcon";
import CollectsIcon from "./CollectsIcon";

interface CatalogItemProps {
  itemType?: string;
}

export default function CatalogItemIcon(props: CatalogItemProps & SvgIconProps) {
  const {
    itemType,
    ...otherProps
  } = props;
  switch (itemType) {
    case 'XtdExternalDocument':
      return <ExternalDocumentIcon {...otherProps} />;
    case 'XtdActivity':
      return <ActivityIcon {...otherProps} />;
    case 'XtdActor':
      return <ActorIcon {...otherProps} />;
    case 'XtdSubject':
      return <SubjectIcon {...otherProps} />;
    case 'XtdUnit':
      return <UnitIcon {...otherProps} />
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
      return <SubjectIcon {...otherProps} />;
  }
}
