import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor() {
    super()
    console.log("parent constructor called")
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount called")
  }
  render() {
    console.log("parent Render called")
    return (
      <div>
        <h1>About</h1>
        <h2>This is React Sample Project</h2>
        <UserClass />
      </div>
    );
  }
}

// const AboutUs = () => (
//     <div>
//         <h1>About</h1>
//         <h2>This is React Sample Project</h2>
//         <UserClass name = {"Sai Teja(class Test)"}  />
//     </div>
// )

export default AboutUs;
