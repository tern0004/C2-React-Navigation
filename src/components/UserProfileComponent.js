import React, {Component} from "react";


class UserProfileComponent extends Component {
    render() {
        return(
            <div>
                <img className="profile-avatar" src={this.props.avatar} alt='avatar'/>
                <div className="profile-info">
                    <h3>{this.props.firstName} {this.props.lastName}</h3>
                    <p>Username: {this.props.phone}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Cell: {this.props.phone}</p>
                    <p>Password: {this.props.phone}</p>
                    <p>Address: {this.props.phone}</p>
                </div>
            </div>
        )
    }
}
export default UserProfileComponent