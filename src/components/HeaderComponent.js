import '../App.css'
import React, {Component} from "react";
import {Link} from "react-router-dom";
class HeaderComponent extends Component {

    render() {
        return(
            <div className="header">
                    <Link to="/" className="header-element active">Home</Link>
                    <Link to="/users" className="header-element">Users</Link>
                    <Link to="/address" className="header-element">Address</Link>
            </div>
        )
    }
}
export default HeaderComponent