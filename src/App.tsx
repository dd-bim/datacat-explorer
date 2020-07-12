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
import ProfileProvider from "./ProfileProvider";
import {SnackbarProvider} from "notistack";

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <ApiProvider>
                    <ThemeProvider
                        theme={theme}
                    >
                        <SnackbarProvider
                            maxSnack={3}
                            variant="success"
                            autoHideDuration={5000}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <MuiPickersUtilsProvider
                                utils={DayjsUtils}
                                libInstance={dateUtil}
                            >
                                <ProfileProvider>
                                    <Layout/>
                                </ProfileProvider>
                            </MuiPickersUtilsProvider>
                        </SnackbarProvider>
                    </ThemeProvider>
                </ApiProvider>
            </AuthProvider>
        </Router>
    );
}
