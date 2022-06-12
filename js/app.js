'use strict';

var APP_STATES = {
  LOADING: 1,
  FROM_TWITTER: 2,
  QUESTION: 3,
  ANSWER: 4,
  FINISHED: 5
};

var IS_POKEMON=0;
var IS_BIGDATA=1;

var App = React.createClass({displayName: "App",
  getInitialState: function() {
    // Check if coming from Twitter
    const isFromTwitter = (document.referrer === "https://t.co/");

    // Load question data from the server
    var self = this;
    $.get('./questions.json', function(questions) {
      questions = _.shuffle(questions);
      const initialCurrentState = isFromTwitter ? 
        APP_STATES.FROM_TWITTER : APP_STATES.QUESTION;
      self.setState({
        currentState: initialCurrentState,
        questionList: questions,
        currentQuestion: questions[0]
      });
    });

    return {
      currentState: APP_STATES.LOADING,
      currentQuestionIndex: 0,
      currentQuestion: null,
      questionList: [],
      correctAnswers: 0,
      isLastAnswerCorrect: null
    };
  },

  startGame: function startGame() {
    this.setState({
      currentState: APP_STATES.QUESTION,
    });
  },

  selectAnswer: function selectAnswer(answerType) {
    var isCorrect = this.state.currentQuestion.type === answerType;

    var correctAnswers = this.state.correctAnswers;
    if (isCorrect) {
      correctAnswers++;
    }

    this.setState({
      currentState: APP_STATES.ANSWER,
      correctAnswers: correctAnswers,
      isLastAnswerCorrect: isCorrect
    });
  },

  nextQuestion: function nextQuestion() {
    var newIndex = this.state.currentQuestionIndex+1;

    // End of the game
    if (newIndex === this.state.questionList.length) {
      this.setState({
        currentState: APP_STATES.FINISHED
      });
      return;
    }

    this.setState({
      currentState: APP_STATES.QUESTION,
      currentQuestionIndex: newIndex,
      currentQuestion: this.state.questionList[newIndex]
    });
  },

  render: function() {
    switch (this.state.currentState) {
      case APP_STATES.LOADING:
        return React.createElement(SplashScreen, null)
      case APP_STATES.FROM_TWITTER:
        return React.createElement(FromTwitter, {question: this.state.currentQuestion, startGame: this.startGame})
      case APP_STATES.QUESTION:
        return React.createElement(Question, {selectAnswer: this.selectAnswer, question: this.state.currentQuestion})
      case APP_STATES.ANSWER:
        return React.createElement(Answer, {nextQuestion: this.nextQuestion, question: this.state.currentQuestion, isAnswerCorrect: this.state.isLastAnswerCorrect})
      case APP_STATES.FINISHED:
        return React.createElement(EndScreen, {correctAnswers: this.state.correctAnswers, questionList: this.state.questionList})
    }
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('body')
);

