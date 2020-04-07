import {SvgIconProps} from "@material-ui/core";
import {XtdCollectionTypes, XtdObjectTypes, XtdRelationshipTypes, XtdRoot} from "../../types";
import SubjectIcon from "./SubjectIcon";
import React from "react";
import ActivityIcon from "./ActivityIcon";
import ActorIcon from "./ActorIcon";
import BagIcon from "./BagIcon";
import NestIcon from "./NestIcon";
import GroupsIcon from "./GroupsIcon";

interface EntityIconProps {
  entity: XtdRoot;
}

export default function EntityIcon(props: EntityIconProps & SvgIconProps) {
  const {
    entity,
    ...otherProps
  } = props;
  switch (entity.__typename) {
    case XtdObjectTypes.XtdActivity:
      return <ActivityIcon {...otherProps} />;
    case XtdObjectTypes.XtdActor:
      return <ActorIcon {...otherProps} />;
    case XtdObjectTypes.XtdSubject:
      return <SubjectIcon {...otherProps} />;
    case XtdCollectionTypes.XtdBag:
      return <BagIcon {...otherProps} />;
    case XtdCollectionTypes.XtdNest:
      return <NestIcon {...otherProps} />;
    case XtdRelationshipTypes.XtdRelGroups:
      return <GroupsIcon {...otherProps} />;
    default:
      return <SubjectIcon {...otherProps} />;
  }
}
