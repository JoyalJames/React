import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";

const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            {/* Loading the pages according to the outlet   : Whenever there is a change in path the outlet will fill children accordingly to the path */}
            <Outlet/>
        </div>
        
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        // creating children route
        children : [
            {
                path : "/",
                element : <Body/> ,   //loads about component
            },
            {
                path : "/about",
                element : <About/> ,   //loads about component
            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ],
        errorElement : <Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<RouterProvider router={appRouter}/>);
