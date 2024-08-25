function renderReact(reactElement, root) {
  const reactElm = document.createElement(reactElement.type);
  reactElm.innerHTML = reactElement.children;
  for (let prop in reactElement.properties) {
    reactElm.setAttribute(prop, reactElement.properties[prop]);
  }

  root.appendChild(reactElm);
}

const reactElement = {
  type: "a",
  properties: {
    href: "https://www.google.com/",
  },
  children: "Click me to visit google",
};

const root = document.getElementById("root");

renderReact(reactElement, root);
