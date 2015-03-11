'use strict';

var Question = React.createClass({
  render: function() {
    return (
      <div className="question">
      <h1 className="question-name">{this.props.question.name}</h1>
      <ul className="question-buttons">
        <li><button className="btn btn-lg btn-default question-button-bigdata">Big Data</button></li>
        <li><button className="btn btn-lg btn-default question-button-pokemon">Pokemon</button></li>
      </ul>
    </div>
    )
  }
});

