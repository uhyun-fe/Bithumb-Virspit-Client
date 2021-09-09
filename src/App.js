import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

// Routes
import { Home, Login, Signup } from "./routes";
// Components
import TopNav from "./components/TopNav/TopNav";
// Styles
import GlobalStyle from "./assets/styles/global.style";

const App = () => {
   return (
      <>
         <CssBaseline />
         <GlobalStyle />
         <Router>
            <TopNav is_login={false} />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/login" component={Login} />
               <Route path="/signup" component={Signup} />
               <Redirect from="*" to="/" />
            </Switch>
         </Router>
      </>
   );
};

export default App;
