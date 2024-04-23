'use strict';

var Question = React.createClass({displayName: "Question",
  selectBigDataAnswer: function selectBigDataAnswer() {
    this.props.selectAnswer(IS_BIGDATA);
  },
  selectPokemonAnswer: function selectPokemonAnswer() {
    this.props.selectAnswer(IS_POKEMON);
  },
  render: function() {
    return (
      React.createElement("div", {className: "question"}, 
        React.createElement("h1", {className: "question-name"}, this.props.question.name), 
        React.createElement("ul", {className: "question-buttons"}, 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-bigdata", onClick: this.selectBigDataAnswer}, "Big Data")), 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-pokemon", onClick: this.selectPokemonAnswer}, "Pokemon"))
        )
      )
    )
  }
});

