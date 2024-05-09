import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
    constructor(){
        super()
        console.log("parent Constractore")
    }
    componentDidMount(){
        console.log("parent componentDidMound")
      }
    render(){
        console.log("parent render")
        return (
            <div>
                <h1>About Page...</h1>
                <UserClass name={"Shahin Class"} location={"Bengalure class"} contact={"@shahingmail.com "} />
           

            </div>
        )

    }
};

export default About; 