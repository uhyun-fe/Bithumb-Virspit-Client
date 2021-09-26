import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import cookie from "react-cookies";
import { CssBaseline } from "@material-ui/core";

// Routes
import { Home, Login, Mypage, Product, Search, Signup } from "./routes";
// Components
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
// Styles
import GlobalStyle from "./assets/styles/global.style";
import { Main } from "./assets/styles/basic.style";
// Contents
import pathname from "./assets/contents/pathname";
import cookie_text from "./assets/contents/cookie_text";

const App = () => {
   const [loginStatus, setLoginStatus] = useState(!!cookie.load(cookie_text.user_token));

   return (
      <>
         <CssBaseline />
         <GlobalStyle />
         <Router>
            <Route render={(props) => <TopNav is_login={loginStatus} {...props} />} />
            <Main>
               <Switch>
                  <Route exact path={pathname.home} render={(props) => <Home is_login={loginStatus} {...props} />} />
                  <Route path={pathname.login} render={(props) => <Login is_login={loginStatus} setLogin={setLoginStatus} {...props} />} />
                  <Route path={pathname.signup} render={(props) => <Signup is_login={loginStatus} {...props} />} />
                  <Route path={pathname.detail(":id")} render={(props) => <Product is_login={loginStatus} {...props} />} />
                  <Route path={pathname.search(":keyword")} render={(props) => <Search is_login={loginStatus} {...props} />} />
                  <Route path={pathname.mypage(":type")} render={(props) => <Mypage is_login={loginStatus} {...props} />} />
                  <Redirect from="*" to={pathname.home} />
               </Switch>
            </Main>
            <Footer />
         </Router>
      </>
   );
};

export default App;
