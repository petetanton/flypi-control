const React = require('react');

var NumWidget = React.createClass({


    render: function () {
        return (
            <strong>
                <span className="number-name">{this.props.name}</span>
                {this.props.prefix}
                <span className="number-value">{this.props.value}</span>
                {this.props.suffix}
            </strong>
        )
    }

});

NumWidget.propTypes = {
    value: React.PropTypes.number,
    name: React.PropTypes.string,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string
};

module.exports = NumWidget;
