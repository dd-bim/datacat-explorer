import {ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import theme from './theme';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import dateTime from './dateTime';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import Layout from './components/layout/Layout';
import possibleTypes from './possibleTypes.json';
import {AuthContext, UserAuthentication, UserSession} from "./AuthContext";
import {useLocalStorage} from "./hooks";

export default function App() {
    const [session, setSession] = useLocalStorage<UserSession | null>("dcuser", null);
    const auth: UserAuthentication = {
        session,
        login: (userSession) => { setSession(userSession) },
        logout: () => { setSession(null) }
    };
    const headers = session ? {
        'Authorization': `Bearer ${session.token}`
    } : {};
    const apolloClient = new ApolloClient({
        connectToDevTools: true,
        cache: new InMemoryCache({
            possibleTypes
        }),
        link: new HttpLink({
            uri: process.env.REACT_APP_API,
            headers
        }),
        name: process.env.REACT_APP_TITLE,
        version: process.env.REACT_APP_VERSION,
    });

    return (
        <Router>
            <Switch>
                <Route>
                    <ThemeProvider theme={theme}>
                        <ApolloProvider client={apolloClient}>
                            <MuiPickersUtilsProvider utils={DayjsUtils} libInstance={dateTime}>
                                <AuthContext.Provider value={auth}>
                                    <Layout/>
                                </AuthContext.Provider>
                            </MuiPickersUtilsProvider>
                        </ApolloProvider>
                    </ThemeProvider>
                </Route>
            </Switch>
        </Router>
    );
}
