import React from "react";
import ReactDOM from 'react-dom/client';



const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"im H1"),
            React.createElement("h1",{},"im H2")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"im H1"),
            React.createElement("h1",{},"im H2")
        ])
    ]
);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);