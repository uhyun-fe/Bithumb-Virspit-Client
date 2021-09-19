import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

// Routes
import { Home, Login, Product, Signup } from "./routes";
// Components
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
// Styles
import GlobalStyle from "./assets/styles/global.style";
import { Main } from "./assets/styles/basic.style";

const App = () => {
   return (
      <>
         <CssBaseline />
         <GlobalStyle />
         <Router>
            <TopNav is_login={false} />
            <Main>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/nft/:id" component={Product} />
                  <Redirect from="*" to="/" />
               </Switch>
            </Main>
            <Footer />
         </Router>
      </>
   );
};

export default App;
