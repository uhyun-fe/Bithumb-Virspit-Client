import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

// Routes
import { Home, Login, Product, Search, Signup } from "./routes";
// Components
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
// Styles
import GlobalStyle from "./assets/styles/global.style";
import { Main } from "./assets/styles/basic.style";
// Contents
import pathname from "./assets/contents/pathname";

const App = () => {
   return (
      <>
         <CssBaseline />
         <GlobalStyle />
         <Router>
            <Route render={(props) => <TopNav is_login={false} {...props} />} />
            <Main>
               <Switch>
                  <Route exact path={pathname.home} component={Home} />
                  <Route path={pathname.login} component={Login} />
                  <Route path={pathname.signup} component={Signup} />
                  <Route path={pathname.detail(":id")} component={Product} />
                  <Route path={pathname.search(":keyword")} component={Search} />
                  <Redirect from="*" to={pathname.home} />
               </Switch>
            </Main>
            <Footer />
         </Router>
      </>
   );
};

export default App;
