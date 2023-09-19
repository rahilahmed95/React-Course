import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createELement => Object => HTML(DOM)
// JSX Expression
const heading = (
  <h1 title="jsx" key="heading">
    My name is JSX
  </h1>
);

// React Component
// Functional --> NEW
// Class Based --> OLD
// Name of component always starts with capital letter
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Hello World Of React</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
