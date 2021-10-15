import React, {Component} from "react";
import HeaderComponent from "../components/HeaderComponent";
import MainPageContent from "../components/MainPageContent";

class MainPage extends Component {
    render() {
        return(
            <div>
                <HeaderComponent/>
                <MainPageContent/>
            </div>
        )
    }
}
export default MainPage