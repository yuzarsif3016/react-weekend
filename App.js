import React from "react";
import ReactDOM from "react-dom/client";

//jsx syntax
//React element
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello From React JSX react element🚀
  </h1>
);

console.log(jsxHeading);

//react Componnent types
//1.Functional Component
//just a normal js function that return a react element,always starts with capital letter

const HeadingComponenet = () => {
  return (
    <div id="container">
        {jsxHeading}
      <h1 id="heading">Hello From React Functional Component 🚀</h1>
      
    </div>
  );
};

const FooterComponent = () => (
  <div>
    {/* <HeadingComponenet /> */}
    {/* {HeadingComponenet()} */}
    <HeadingComponenet></HeadingComponenet>
    <h1>Hello From React Functional Component Footer 🚀</h1>
  </div>
);

//2. Class Component --> old way of writing code

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<FooterComponent />);
