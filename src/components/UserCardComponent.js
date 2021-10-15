import '../App.css'
import React, {Component} from "react";
import {Link} from "react-router-dom";



class UsersCardComponent extends Component {

    render() {
        return(
            <div className="user-card">
                <img className="user-avatar" src={this.props.user.picture.large} alt='avatar'/>
                <div className="user-info">
                    <Link to="/user/profile" onClick={() => {
                        
                    }}>{this.props.user.name.first} {this.props.user.name.last}</Link>
                    <p>Email: {this.props.user.email}</p>
                    <p>Cell: {this.props.user.cell}</p>
                </div>
            </div>
        )
    }
}
export default UsersCardComponent