import React, {Component} from "react";

class AddressCardComponent extends Component {

    render() {
        return(
            <div className="user-card">
                <img className="user-avatar" src={this.props.user.picture.large} alt='avatar'/>
                <div className="user-info">
                    <h4>{this.props.user.name.first} {this.props.user.name.last}</h4>
                    <p>Address: {this.props.user.location.street}, {this.props.user.location.city}, {this.props.user.location.state}</p>
                </div>
            </div>
        )
    }
}
export default AddressCardComponent