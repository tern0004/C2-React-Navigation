import React, {Component} from "react";
import HeaderComponent from "../components/HeaderComponent";
import UserProfileComponent from "../components/UserProfileComponent";



class UserProfilePage extends Component {
    render() {
        return(
            <div>
                <HeaderComponent/>
                <UserProfileComponent/>
            </div>
        )
    }
}
export default UserProfilePage