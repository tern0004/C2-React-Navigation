import React, {Component} from "react";
import randomUserAPI from "../api/randomUserAPI";
import AddressCardComponent from "./AddressCardComponent";

class AddressListComponent extends Component {
    state = {
        loading: true,
        user: null
    };

    async componentDidMount() {
        let result = await randomUserAPI.getAllUsers()
        let data = result.results
        this.setState({ user: data, loading: false })
        console.log(this.state)
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

                {this.state.user.map(u => (<AddressCardComponent user={u}/>))}
            </div>
        )
    }
}
export default AddressListComponent