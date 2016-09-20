var ReactDOM = require("react-dom");
var React = require("react");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

// material-ui
var RaisedButton = require('material-ui').RaisedButton;
var MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;
var injectTapEventPlugin = require('react-tap-event-plugin');

// self-define componet
var Header = React.createFactory(require('./Base.jsx')['header']);
var Footer = React.createFactory(require('./Base.jsx')['footer']);
var CommentBox = React.createFactory(require('./Comment.jsx')[0]);
var CommentForm = React.createFactory(require('./Comment.jsx')[1]);

injectTapEventPlugin();

var App = React.createClass({
    render: function()  {
      return (
        <MuiThemeProvider>
          <RaisedButton label="Default" />
        </MuiThemeProvider>
      )
    }
});
var About = React.createClass({
    render: function()  {
      return (
        <RaisedButton label="Default" />
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
    </Route>
    <Route path="/form" component={CommentForm} />
  </Router>
), document.getElementById('content'));

ReactDOM.render((
  <Header />
), document.getElementById("header"));

ReactDOM.render((
  <Footer />
), document.getElementById("footer"));
