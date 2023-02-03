import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutUs from "./component/Pages/About";
import Home from "./component/Pages/Home";
import Store from "./component/Pages/Store";

const App = (props) => {
  return (
    <Fragment>
      <main>
        <Switch>
          <Route path="/" exact> 
            <Redirect to="/home"/>
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        </Switch>
      </main>
    </Fragment>
  );
};

export default App;
