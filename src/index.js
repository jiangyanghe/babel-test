// import 'core-js';
import _ from 'lodash';
import './style.css';
// import Icon from './img56.jpeg';
// import json from './data.json5';
import printMe from './print.js';

import es6 from './es6';

// console.log(json.owner); 

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join('Hello', 'webpack');
  element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon)

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());