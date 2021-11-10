function createElement(tag, attributes, ...children) {
  console.log({ tag, attributes, children });
}

const myDocument = <p>Hello, world</p>;
const myDiv = <div><p>Hello world</p></div>;