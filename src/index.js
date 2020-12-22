import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDom.render(<App />, document.querySelector('#root'));
