import React from "react";

class userClass extends React.Component{
  constructor(props){
    super(props)
    // console.log("Chiled constructor"+this.props.name)
    this.state={
      name:"dummy",
      location:"dummy"

    }

  }

  async componentDidMount(){
    // console.log("chiled componentDidMound"+this.props.name)

    const data = await fetch("https://api.github.com/users/Umarulshahin") 
    const json = await data.json()
    // console.log(json)
    this.setState({
      name:json.name,
      avatar_url:json.avatar_url
    })
  }

  componentDidUpdate(){
    // console.log("componentdidUpdate")
  }
  render(){
    // console.log("Chiled render"+this.props.name)
    const{
        
        location,
        contact
    }=this.props
    const {name,avatar_url}=this.state
    

    return (
        <div className="user-card">
          <img src={avatar_url} />
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : {contact}</h4>

        </div>
    )
  }    
};

export default userClass;