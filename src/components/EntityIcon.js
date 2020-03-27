import React from 'react';
import {
    AcUnit,
    Collections,
    DeviceHub,
    EmojiPeople,
    Gavel,
    ImportExport,
    Rowing,
    Star,
    ViewModule,
    ViewQuilt,
} from '@material-ui/icons';

export function ActivityIcon() {
    return (
        <Rowing />
    );
}

export function ActorIcon() {
    return (
        <EmojiPeople />
    );
}

export function UnitIcon() {
    return (
        <AcUnit />
    );
}

export function BagIcon() {
    return (
        <ViewQuilt />
    )
}

export function NestIcon() {
    return (
        <ViewModule />
    );
}

export function CollectsIcon() {
    return (
        <Collections />
    );
}

export function AssociatesRelationIcon() {
    return (
        <ImportExport />
    );
}

export function SpecializesIcon() {
    return (
        <Star />
    );
}

export function ComposesIcon() {
    return (
        <DeviceHub />
    );
}

export function ActsUponIcon() {
    return (
        <Gavel />
    );
}
