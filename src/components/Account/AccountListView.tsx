import Table from "../table/Table";
import React from "react";
import {AccountFragment, useAccountListQuery} from "../../generated/types";
import useListView from "../View/useListView";
import PeopleIcon from '@material-ui/icons/People';
import PropertyCell from "../table/PropertyCell";
import useTableRows from "../../hooks/useTableRows";
import BooleanCell from "../table/BooleanCell";
import StatusIcon from "../icons/StatusIcon";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import LockButton from "./LockButton";
import UnlockButton from "./UnlockButton";
import EmailRequestButton from "./EmailRequestButton";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {Tooltip} from "@material-ui/core";
import ViewWrapper from "../View/ViewWrapper";
import ChangeStatusButton from "./ChangeStatusButton";

const columnsFactory = () => [
    {id: 'name', Header: 'Name', accessor: 'name'},
    {id: 'email', Header: 'Email', accessor: 'email'},
    {
        id: 'expired',
        Header: <Tooltip title="Non expired"><AccessTimeIcon fontSize="small"/></Tooltip>,
        accessor: 'expired'
    },
    {id: 'locked', Header: <Tooltip title="Non locked"><LockOpenIcon fontSize="small"/></Tooltip>, accessor: 'locked'},
    {
        id: 'emailConfirmed',
        Header: <Tooltip title="Email confirmed"><MailOutlineIcon fontSize="small"/></Tooltip>,
        accessor: 'emailConfirmed'
    },
    {
        id: 'enabled',
        Header: <Tooltip title="Account enabled"><DoneAllIcon fontSize="small"/></Tooltip>,
        accessor: 'enabled'
    },
    {id: 'status', Header: 'Status', accessor: 'status'},
    {id: 'actions', Header: 'Actions', accessor: 'actions'},
];

const rowFactory = (item: AccountFragment) => {
    const {
        profile: {
            username,
            firstName,
            lastName,
            email,
        },
        expired,
        credentialsExpired,
        locked,
        emailConfirmed,
        enabled,
        status
    } = item;

    return {
        name: (
            <PropertyCell
                primary={firstName + ' ' + lastName}
                secondary={username}
            />
        ),
        email: <PropertyCell primary={email}/>,
        expired: <BooleanCell value={!expired} fontSize="small"/>,
        credentialsExpired: <BooleanCell value={!credentialsExpired} fontSize="small"/>,
        locked: <BooleanCell value={!locked} fontSize="small"/>,
        emailConfirmed: <BooleanCell value={emailConfirmed} fontSize="small"/>,
        enabled: <BooleanCell value={enabled} truthyIcon={<DoneAllIcon fontSize="small"/>} fontSize="small"/>,
        status: <StatusIcon value={status} fontSize="small"/>,
        actions: (
            <React.Fragment>
                {locked ? <UnlockButton username={username}/> : <LockButton username={username}/>}
                <EmailRequestButton username={username}/>
                <ChangeStatusButton username={username} initialStatus={status}/>
            </React.Fragment>

        )
    }
};

export default function AccountListView() {
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useAccountListQuery);
    const {columns, rows} = useTableRows<AccountFragment>({items: data?.accounts.nodes, columnsFactory, rowFactory});

    return (
        <ViewWrapper>
            <Table
                icon={<PeopleIcon/>}
                title="Accounts"
                query={query}
                onQueryChange={setQuery}
                loading={loading}
                error={!!error}
                columns={columns}
                rows={rows}
                paginationOptions={{
                    count: data?.accounts.totalElements || 0,
                    ...pagingOptions
                }}
            />
        </ViewWrapper>
    );
}
