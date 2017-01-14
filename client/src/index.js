var css = require('./style.css');
var React = require('react');
var ReactDOM = require('react-dom');

var Page = require('./components/page');
var Navigation = require('./components/nav');

ReactDOM.render(<Page />, document.getElementById('root'));
