import './App.css';
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage";
import PageNotFound from "./containers/PageNotFound";
import UsersPage from "./containers/UsersPage";
import UserProfilePage from "./containers/UserProfilePage";
import AddressPage from "./containers/AddressPage";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/users' component={UsersPage}/>
            <Route exact path='/user/profile' component={UserProfilePage}/>
            <Route exact path='/address' component={AddressPage}/>
            <Route path='/' component={PageNotFound}/>
          </Switch>
        </div>
    );
  }
}

export default App;
