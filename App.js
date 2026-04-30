// code using react

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is my react heading",
);
root.render(heading);
