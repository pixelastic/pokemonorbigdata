'use strict';

var EndScreen = React.createClass({
  render: function() {
    var percent = Math.round(this.props.correctAnswers / this.props.questionList.length * 100);
    var classes = classNames({
      'progress-bar': true,
      'progress-bar-danger': percent < 20,
      'progress-bar-warning': percent >= 20 && percent < 50,
      'progress-bar-info': percent >= 50 && percent < 80,
      'progress-bar-success': percent >= 80
    });
    var style = {
      width: percent + '%'
    };

    return (
      <div className="endscreen">
        <h1 className="endscreen-title">Congratulations, you got {percent}% correct!</h1>
        <div className="progress">
          <div className={classes} style={style}>
            <span className="sr-only">20% Complete</span>
          </div>
        </div>
      </div>
    )
  }
});






