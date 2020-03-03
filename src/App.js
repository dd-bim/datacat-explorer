import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import theme from './theme';
import {BrowserRouter as Router} from 'react-router-dom';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import dateTime from './dateTime';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import Layout from './Layout';

const client = new ApolloClient({
    cache: new InMemoryCache({
        dataIdFromObject: object => object.id || null
    }),
    link: new HttpLink({
        uri: process.env.REACT_APP_API
    })
});

export default function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <MuiPickersUtilsProvider utils={DayjsUtils} libInstance={dateTime}>
                        <Layout/>
                    </MuiPickersUtilsProvider>
                </ApolloProvider>
            </ThemeProvider>
        </Router>
    );
}
