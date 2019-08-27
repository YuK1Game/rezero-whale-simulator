import React from 'react';

export default ({ children, point }) => (
    <span>{ Math.round(parseFloat(children) * 100 * Math.pow(10, point || 1)) / Math.pow(10, point || 1) }%</span>
)