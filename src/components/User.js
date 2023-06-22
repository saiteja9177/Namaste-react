import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);
  return (
    <div className="user-card">
      <h1>Count= {count}</h1>
      <h1>Count2= {count2}</h1>
      <h2>name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact:9177257139</h4>
    </div>
  );
};

export default User;
