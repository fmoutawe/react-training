# JSX without React

## Requirements
* Node
* NPM
* Yarn

## First step: Babel integration


### Installation
* Create folder `first-step` and move to the new folder
* Execute command `npm init -y`
* Execute command `yarn add @babel/cli @babel/core @babel/plugin-transform-react-jsx`

### Getting started

>All the following instructions took place in the folder `first-step`

Create the file .babelrc with the following content
```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "createElement" }]
  ],
  "comments": false
}
```

Create the file `index.jsx` with the following content
```jsx
function createElement(tag, attributes, ...children) {
  console.log({ tag, attributes, children });
}

const myDocument = <p>Hello, world</p>;
const myDiv = <div><p>Hello world</p></div>;
```

Execute the command `npx babel index.jsx -d dist`
Check the results in the `dist` folder

## Second step: DOM integration

### Installation
* Copy the folder `first-step` and rename it `second-step`

### Getting started
>All the following instructions took place in the folder `second-step`

Create the folder `src` and move the file `index.jx`

Create the file `src/createElement.js` with the following content
```jsx
const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild))
  else
    parent.appendChild(
      child.nodeType ? child : document.createTextNode(child)
    )
}

const createElement = (tag, props, ...children) => {
  const element = document.createElement(tag)

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith('on') && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value)
    else element.setAttribute(name, value.toString())
  })

  children.forEach((child) => {
    appendChild(element, child)
  })

  return element
}
```

Update `src/index.jsx` with the following content
```jsx
const myDocument = <p>Hello, world</p>;
const myDiv = <div style="background: pink"><p>Hello world</p></div>;

document.getElementById('root').appendChild(myDocument);
document.getElementById('root').appendChild(myDiv);
```

Execute folowwing commands
```shell
npx babel src/createElement.js -d dist
npx babel src/index.jsx -d dist
```

Create the file `index.html` in the folder `second-step` with the following content
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSX without React</title>
</head>
<body>
<div id="root"></div>

<script src="dist/createElement.js"></script>
<script src="dist/index.js"></script>
</body>
</html>
```

Check the result !

## Third step: React integration

### Installation
* Copy `second-step` fold and rename it `third-step`
* In `third-step` folder, do following actions:
  * Execute command `yarn add react react-dom`
  * Remove the file `src/createElement.js`
  * Remove the folder `dist`

### Getting started

Update `.babelrc` file with the following content
```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "React.createElement" }]
  ],
  "comments": false
}
```

Update `index.html` file with the following content
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSX without React</title>
</head>
<body>
<div id="root"></div>

<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
<script src="dist/index.js"></script>
</body>
</html>
```

Update `src/index.jsx` file with the following content
```jsx
const root = <div style={{background: 'pink'}}><p className={'paragraph'}>Hello world</p></div>;

ReactDOM.render(root, document.getElementById('root'));
```

Execute the command
```shell
npx babel src -d dist
```

Check the result !