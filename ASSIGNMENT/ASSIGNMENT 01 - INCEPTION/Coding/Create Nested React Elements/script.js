const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is the H1 element"),
    React.createElement("h2", {}, "This is the H2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is the H1 element"),
    React.createElement("h2", {}, "This is the H2 element"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
