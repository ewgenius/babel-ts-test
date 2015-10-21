/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/react-dom/react-dom.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TestComponent } from './components/TestComponent';
import { App } from './components/App/App';

function run() {
  ReactDOM.render(React.createElement(App), document.getElementById('main'));
}

console.log(document.readyState);
document.addEventListener('DOMContentLoaded', run, false);
