import { Component } from "react";
import Home from "./Home";
import Header from "./Header";

class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
            </div>
        );
    }
}
export default Main;