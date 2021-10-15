import '../App.css'
import React, {Component} from "react";
import UserCardComponent from "./UserCardComponent";
import randomUserAPI from "../api/randomUserAPI";


class UsersListComponent extends Component {
    state = {
        loading: true,
        user: null
    };

    async componentDidMount() {
        let result = await randomUserAPI.getAllUsers()
        let data = result.results

        data.forEach(user => {
            this.setState({ user: data, loading: false })
            })

    }

    render() {

        if(this.state.loading) {
            return (<div>Loading</div>)
        }
        if(!this.state.user) {
            return (<div>No user found</div>)
        }
        return (
            <div className="users-list">

                    {this.state.user.map(function (u) {
                        return ( <UserCardComponent user={u}/> )
                    })}
            </div>
        )
    }
}
export default UsersListComponent