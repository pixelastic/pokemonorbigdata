'use strict';

var Question = React.createClass({
  selectBigDataAnswer: function selectBigDataAnswer() {
    this.props.selectAnswer(IS_BIGDATA);
  },
  selectPokemonAnswer: function selectPokemonAnswer() {
    this.props.selectAnswer(IS_POKEMON);
  },
  render: function() {
    return (
      <div className="question">
        <h1 className="question-name">{this.props.question.name}</h1>
        <ul className="question-buttons">
          <li><button className="btn btn-lg btn-default question-button-bigdata" onClick={this.selectBigDataAnswer}>Big Data</button></li>
          <li><button className="btn btn-lg btn-default question-button-pokemon" onClick={this.selectPokemonAnswer}>Pokemon</button></li>
        </ul>
      </div>
    )
  }
});

