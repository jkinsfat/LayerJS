const React = require('react');
const layerListItem = require('./layerlistitem.js');

const layerMenu = ({layers, addLayer}) => (
    <div id="layer-ctl">
        <ul id="layer-list">
            {layers.map(layerListItem)}
        </ul>
        <button id="add-layer">Add Layer</button>
    </div>
);

module.exports = layerMenu