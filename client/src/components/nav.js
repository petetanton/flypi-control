const React = require('react');

var Navigation = React.createClass({


    render: function () {
        return (
            <div className="wrapper">
                <ul className="navigation">
                    <li className="navigation-item">Home1</li>
                    <li className="navigation-item">Home2</li>
                    <li className="navigation-item">Home3</li>
                    <li className="navigation-item">Home4</li>
                    <li className="navigation-item">Home5</li>
                </ul>
            </div>
        )
    }

});

Navigation.propTypes = {};

module.exports = Navigation;
