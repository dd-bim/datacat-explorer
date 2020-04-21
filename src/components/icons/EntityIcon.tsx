import {SvgIconProps} from "@material-ui/core";
import {
    EntityTypes,
    XtdCollectionTypes,
    XtdEntity,
    XtdObjectTypes,
    XtdRelAssociatesTypes,
    XtdRelationshipTypes
} from "../../types";
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

interface EntityIconProps {
  entity: XtdEntity;
}

export default function EntityIcon(props: EntityIconProps & SvgIconProps) {
  const {
    entity,
    ...otherProps
  } = props;
  switch (entity.__typename) {
    case EntityTypes.XtdExternalDocument:
      return <ExternalDocumentIcon {...otherProps} />;
    case XtdObjectTypes.XtdActivity:
      return <ActivityIcon {...otherProps} />;
    case XtdObjectTypes.XtdActor:
      return <ActorIcon {...otherProps} />;
    case XtdObjectTypes.XtdSubject:
      return <SubjectIcon {...otherProps} />;
    case XtdObjectTypes.XtdUnit:
      return <UnitIcon {...otherProps} />
    case XtdObjectTypes.XtdProperty:
      return <PropertyIcon {...otherProps} />;
    case XtdCollectionTypes.XtdBag:
      return <BagIcon {...otherProps} />;
    case XtdCollectionTypes.XtdNest:
      return <NestIcon {...otherProps} />;
    case XtdRelationshipTypes.XtdRelDocuments:
      return <DocumentsIcon {...otherProps} />;
    case XtdRelationshipTypes.XtdRelCollects:
      return <CollectsIcon {...otherProps} />;
    case XtdRelationshipTypes.XtdRelAssociates:
      return <AssociatesIcon {...otherProps} />;
    case XtdRelAssociatesTypes.XtdRelGroups:
      return <GroupsIcon {...otherProps} />;
    default:
      return <SubjectIcon {...otherProps} />;
  }
}
