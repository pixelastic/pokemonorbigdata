'use strict';

var Answer = React.createClass({
  render: function() {
    return (
      <div className="answer">
        <h1 className="answer-name">Balbuzard</h1>
        <div className="answer-picture"></div>
        <div className="answer-text"></div>
        <div className="answer-next">
          <button className="btn btn-lg btn-primary answer-button-next">Next question</button>
        </div>
      </div>
    )
  }
});

