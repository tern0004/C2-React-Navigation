import React, {Component} from "react";
import HeaderComponent from "../components/HeaderComponent";


class PageNotFound extends Component {
    render() {
        return(
            <div>
                <HeaderComponent/>
                <h2>Error 404: Page Not Found</h2>
            </div>
        )
    }
}
export default PageNotFound