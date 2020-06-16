import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {ApolloError} from "@apollo/client";

type AsyncViewProps = {
    loading?: boolean
    loadingComponent?: React.ReactNode
    error?: ApolloError | boolean
    errorComponent?: React.ReactNode
    children?: React.ReactNode
}

export default function AsyncWrapper(props: AsyncViewProps) {
    const { loading, loadingComponent, error, errorComponent, children } = props;

    let output;
    if (loading) {
        output = (loadingComponent ? loadingComponent : <LinearProgress />);
    } else if (error) {
        output = (errorComponent ? errorComponent : <p>Error...</p>);
    } else {
        output = children;
    }

    return (
        <React.Fragment>
            {output}
        </React.Fragment>
    )
}
