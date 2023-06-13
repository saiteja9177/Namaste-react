import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 className="head" id="heading">
    REACT DEVELOPMENT
  </h1>
);

const HeadingComponent = () => {
    return <h1>React Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
