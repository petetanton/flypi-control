const React = require('react');

var NumWidget = require('./widget/number-widget');

var Status = React.createClass({


    render: function () {
        return (
            <div className="wrapper status-wrapper">
                <ul className="status-ul">
                    <li className="status-item"><NumWidget name="Velocity" value={10} suffix="mph" /></li>
                    <li className="status-item"><NumWidget name="Heading" value={3} suffix="degrees" /></li>
                    <li className="status-item"><NumWidget name="Altitude" value={1.67} suffix="meters" /></li>
                </ul>
            </div>
        )
    }

});

Status.propTypes = {};

module.exports = Status;
