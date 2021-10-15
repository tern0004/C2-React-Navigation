import React, {Component} from "react";
import HeaderComponent from "../components/HeaderComponent";
import UsersListComponent from "../components/UsersListComponent";

class UsersPage extends Component {
    render() {

        return(
            <div>
                <HeaderComponent/>
                <UsersListComponent/>
            </div>
        )
    }
}
export default UsersPage