import {AccountStatus} from "../../generated/types";
import BuildIcon from '@material-ui/icons/Build';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ErrorIcon from '@material-ui/icons/Error';
import React from "react";
import {SvgIconProps, Tooltip} from "@material-ui/core";

type StatusIconProps = {
    value: AccountStatus
}

export default function StatusIcon(props: StatusIconProps & SvgIconProps) {
    const {value, ...otherProps} = props;
    let icon;

    switch (value) {
        case AccountStatus.Admin: {
            icon = <BuildIcon {...otherProps}/>;
            break;
        }
        case AccountStatus.Verified: {
            icon = <VerifiedUserIcon {...otherProps}/>;
            break;
        }
        default: {
            icon = <ErrorIcon {...otherProps}/>;
            break;
        }
    }

    return (
        <Tooltip title={value}>
            {icon}
        </Tooltip>
    )
}
