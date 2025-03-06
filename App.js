import React from "react";
import ReactDOM from 'react-dom/client';


const Title = () => (
    <h2>Hellooo React!...</h2>
);
const HeaderComponent = () => (
    //component composition
    <div>
        <Title />
        <h3>Hii Joyal ....</h3>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<HeaderComponent/>);
