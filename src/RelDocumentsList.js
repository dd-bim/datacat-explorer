import React, {forwardRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import Chip from '@material-ui/core/Chip';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import api from "./api";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

const useStyles = makeStyles(theme => ({
    root: {
        'padding': theme.spacing(3),
        '& > *': {
            margin: theme.spacing(0.5)
        }
    }
}));

function ItemChip({label}) {
    return (
        <Chip variant="outlined" size="small" label={label}/>
    );
}

export default function RelCollectsList(props) {
    const classes = useStyles();

    const data = query => {
        return api
            .fetchRelDocuments({page: query.page, size: query.pageSize})
            .then(result => {
                return {
                    data: result.content,
                    page: result.number,
                    totalCount: result.totalElements,
                };
            });
    };

    const columns = [
        { title: 'Name', render: row => row.relatingDocument.names[0].name, editable: 'onAdd'},
        {title: 'Items', render: row => row.relatedThings.length, editable: 'never'},
        {title: 'Version ID', field: 'versionId', editable: 'onAdd'},
        {title: 'Version Date', field: 'versionDate', editable: 'onAdd'},
    ];
    const options = {
        search: false,
        toolbar: false,
        pageSize: 20,
        pageSizeOptions: [20, 50, 100],
        sorting: false,
    };

    return (
        <MaterialTable
            icons={tableIcons}
            columns={columns}
            loading={props.loading}
            data={data}
            detailPanel={rowData => (
                <div className={classes.root}>
                    {rowData.relatedThings.map(x => <ItemChip key={x.id} label={x.names[0].name}/>)}
                </div>
            )}
            options={options}/>
    )
}
