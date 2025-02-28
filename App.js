import React from "react";
import ReactDOM from 'react-dom/client';


// React.createElement => Object => HTMLElement(render)

// JSX => is HTML / XML likes syntax
//JSX => Babel transpiles it to React.createElement => RdactElement-JS object => HTML element(render)
const JSXHeading = <h1 id="header">Hello Joyallll...!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(JSXHeading);