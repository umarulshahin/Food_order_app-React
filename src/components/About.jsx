import UserClass from "./UserClass"
import React from "react";
import UserContext from "../utils/useContext";
class About extends React.Component{
    constructor(){
        super()
        // console.log("parent Constractore")
    }
    componentDidMount(){
        // console.log("parent componentDidMound")
      }
    render(){
        // console.log("parent render")
        return (
            <div>
                <h1>About Page...</h1>
                <div>
                    LoginUser:
                <UserContext.Consumer>

                  {({defaultuser})=><h1 className="font-bold">{defaultuser}</h1>}
                </UserContext.Consumer>
                </div>
                <UserClass name={"Shahin Class"} location={"Bengalure class"} contact={"@shahingmail.com "} />
           

            </div>
        )

    }
};

export default About; 