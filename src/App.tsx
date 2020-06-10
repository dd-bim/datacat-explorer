import {ThemeProvider} from "@material-ui/core/styles";
import React from "react";
import theme from "./theme";
import {BrowserRouter as Router} from "react-router-dom";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import dateUtil from "./dateUtil";
import Layout from "./components/Layout/Layout";
import AuthProvider from "./AuthProvider";
import ApiProvider from "./ApiProvider";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <ApiProvider>
                    <ThemeProvider
                        theme={theme}
                    >
                        <MuiPickersUtilsProvider
                            utils={DayjsUtils}
                            libInstance={dateUtil}
                        >
                            <Layout/>
                        </MuiPickersUtilsProvider>
                    </ThemeProvider>
                </ApiProvider>
            </AuthProvider>
        </Router>
    );
}
