'use strict'
const ReactDOM = require('react-dom');
const layerMenu = require('./layermenu.js');
const appContainer = document.getElementById('app');
const layers = [{ id: 8000, layerName: 'Ghastly' }];

console.log(appContainer);

ReactDOM.render(
    layerMenu({layers, addLayer: () => console.log('hello')}),
    appContainer
);