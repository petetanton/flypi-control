const React = require('react');


var Title = require('./title');
var Navigation = require('./nav');
var Status = require('./status');


var Page = React.createClass({



    render: function() {
        return (
            <div className="wrapper">
                <Title />
                <Navigation />
                <Status />
            </div>
        )
    }

});

Page.propTypes = {
};

module.exports = Page;
