'use strict';

var IS_POKEMON=0;
var IS_BIGDATA=1;

var App = React.createClass({displayName: "App",
  getInitialState: function() {
    // Load question data from the server
    var self = this;
    $.get('./questions.json', function(questions) {
      self.setState({
        isLoading: false,
        questionList: questions
      });
    });

    return {
      isLoading: true,
      isWaitingForAnswer: true,
      currentQuestionIndex: 0,
      questionList: [],
      correctAnswers: 0
    };
  },

  render: function() {
    var isSplashScreenActive = this.state.isLoading;
    var isQuestionActive = !isSplashScreenActive && this.state.isWaitingForAnswer;
    var isAnswerActive = !isSplashScreenActive && !this.state.isWaitingForAnswer;
    return (
      React.createElement("div", null, 
        React.createElement(SplashScreen, {active: isSplashScreenActive}), 
        React.createElement(Question, {active: isQuestionActive}), 
        React.createElement(Answer, {active: isAnswerActive})
      )
    )
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('body')
);

