var ReactDOM = require("react-dom");
var React = require("react");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

var Header = React.createFactory(require('./Base.jsx')['header']);
var Footer = React.createFactory(require('./Base.jsx')['footer']);

var CommentBox = React.createFactory(require('./Comment.jsx')[0]);
var CommentForm = React.createFactory(require('./Comment.jsx')[1]);

var App = React.createClass({
    render: function()  {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
});
var About = React.createClass({
    render: function()  {
      return (
        <div>
          about
        </div>
      )
    }
});

var Dashboard = React.createClass({
  render: function() {
    return <div>Welcome to the app!</div>
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="form" component={CommentForm} />
    </Route>
  </Router>
), document.getElementById('content'));

ReactDOM.render((
  <Header />
), document.getElementById("header"));

ReactDOM.render((
  <Footer />
), document.getElementById("footer"));
