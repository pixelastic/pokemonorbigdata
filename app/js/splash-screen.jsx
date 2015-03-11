'use strict';

var SplashScreen = React.createClass({
  render: function() {
    var classes = classNames({
      'splashscreen': true,
      'splashscreen-active': this.props.active,
      'splashscreen-hidden': !this.props.active
    });
    return (
      <div className={classes}>Splashscreen</div>
    )
  }
});

