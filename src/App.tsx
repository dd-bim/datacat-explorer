import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import './App.css';
import theme from './theme';
import {BrowserRouter as Router} from 'react-router-dom';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import dateTime from './dateTime';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import Layout from './components/layout/Layout';
import possibleTypes from './possibleTypes.json';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache({
      possibleTypes
  }),
  link: new HttpLink({
    uri: process.env.REACT_APP_API,
  }),
  name: process.env.REACT_APP_TITLE,
  version: process.env.REACT_APP_VERSION,
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
