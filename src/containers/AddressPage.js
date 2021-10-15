import React, {Component} from "react";
import HeaderComponent from "../components/HeaderComponent";
import AddressListComponent from "../components/AddressListComponent";

class AddressPage extends Component {
    render() {
        return(
            <div>
                <HeaderComponent/>
                <AddressListComponent/>
            </div>
        )
    }
}
export default AddressPage