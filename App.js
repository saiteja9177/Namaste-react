import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    REACT DEVELOPMENT
  </h1>
);

//component composition
const HeadingComponent = () => (
    <div id="container">
    <Title/>
     <h1 className="heading">React Component</h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
