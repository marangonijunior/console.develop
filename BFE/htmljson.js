/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
function virtualize(element) {
    const props = {};
    const children = [];

    for(let attr of element.attributes){
      const name = attr.name === 'class' ? 'className' : attr.name;
      props[name] = attr.value;
    }

    for(let node of element.childNodes){
      node.nodeType === 3 ? children.push(node.textContent) : children.push(virtualize(node));
    }

    props.children = children.length === 1 ? children[0]: children;

    return {
      type: element.tagName.toLowerCase(),
      props
    }
}

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  if (typeof type === 'function') {
    return type({ ...props, children });
  }

  return {
    type, 
    props: {
      ...props,
      children,
    }
  }
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj) {
  if(typeof obj === 'string'){
    return document.createTextNode(obj);
  }
  
  const  { type, props: { children, ...attrs}} = obj;
  const node = document.createElement(type);

  for(let [attr, value] of Object.entries(attrs)) {
    node[attr] = value;
  }

  const childrenArr = Array.isArray(children) ? children : [children];
  
  for (let child of childrenArr) {
    node.append(render(child));
  }

  return node;
}

const html = document.createElement('div')
html.innerHTML = `<h1> this is </h1><p class="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a></p>`

console.log(virtualize(html))

const html_b = render(virtualize(html))