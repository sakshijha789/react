// const heading = React.createElement('h1',{id:'heading',className:'h1'},'hello from react');
const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
// basically heading is not a h1 tage, but it is a react element or we can call it as a javascript object.
// During render, this object is converted into html thats the browser understands.
//   console.log(heading) //object
// React is a library because it can work only for a small piece of portion also. It is just a piece of js code.
// React is just js
// A framework comes along with long codes or baggage of things.
//Other frameworks cannot be applied on our existing apps or projects but we can inject react in our existing projects also.
//For ex- just crate a root in your app and apply react without affecting other parts, it works also on a small piece of page

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])]
);

root.render(parent);
console.log(parent);
