var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
         Header
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className="header">
         Footer
      </div>
    );
  }
});

module.exports={header:Header, footer:Footer};