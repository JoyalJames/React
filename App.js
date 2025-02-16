//const heading = React.createElement("h1",{id:"parent",xyz:"ohk"},"iam Joyal");



{/* <div id="parent">
    <div id="child">
        <h1>"Im h1</h1>   ---> if we want to add 2 or more children use []
    </div>
</div> */}
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