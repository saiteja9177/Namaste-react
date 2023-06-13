import React from "react";
import ReactDOM from "react-dom/client";



//component composition
const HeadingComponent = () => (
    <React.Fragment>
    <div id="container">
     <h1 className="heading">React Component</h1>
     </div>
     <div id="container-2"></div>
     </React.Fragment>
)

const title = (
    <h1 className="head" tabIndex="5">
      REACT DEVELOPMENT
      <HeadingComponent/>
    </h1>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
