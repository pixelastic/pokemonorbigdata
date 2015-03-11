'use strict';

var IS_POKEMON=0;
var IS_BIGDATA=1;

var App = React.createClass({
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
    var currentQuestion = this.state.questionList[this.state.currentQuestionIndex];

    if (isSplashScreenActive) {
      return <SplashScreen active={isSplashScreenActive} />
    }

    if (isQuestionActive) {
      return <Question active={isQuestionActive} question={currentQuestion} />
    }

    if (isAnswerActive) {
      return <Answer active={isAnswerActive} question={currentQuestion} />
    }
  }
});

React.render(
  <App />,
  document.getElementById('body')
);

