'use strict'
const React = require('react');

const defaultLayerName = 'New Layer';

const layerListItem = ({ id, depth, layerName=defaultLayerName}) => (
    <li key={id} className="layer-li">
        <input id={ id } type='radio' name='layerDepth' value={depth}></input>
        <label for={ id }>
            <span contentEditable='true'>{ layerName }</span>
        </label>
    </li>
);

module.exports = layerListItem;