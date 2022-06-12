'use strict';

var FromTwitter = React.createClass({displayName: "FromTwitter",
  startGame: function startGame() {
    this.props.startGame();
  },
  render: function() {
    return (
      React.createElement("div", {className: "fromTwitter bg-info"}, 
        React.createElement("h1", null, "Hello Twitter user"), 
        React.createElement("div", {className: "fromTwitter-image"}, React.createElement("img", {src: "./img/twitter.png"})), 
        React.createElement("div", {className: "fromTwitter-text"}, 
          React.createElement("p", null, 
            "Have you ever heard of Website Takeover? It's a cyber security risk" + ' ' +
            "that happens when the content of a website is" + ' ' +
            "changed ", React.createElement("bold", null, "after"), " it has been shared on social media."
          ), 

          React.createElement("p", null, 
            "It can be used to make it look like the original poster endorses ideas and" + ' ' +
            "values that are the complete opposite of what they actually believe" + ' ' +
            "in."
          ), 

          React.createElement("p", null, 
            "For example, one could make you believe that Elon Musk is a decent" + ' ' +
            "human being because the website he linked is encouraging you" + ' ' +
            "to donate to charities that act against ", React.createElement("a", {href: "https://naacp.org/donate", target: "_blank"}, "systemic racism"), ", ", React.createElement("a", {href: "https://donate.unwomen.org", target: "_blank"}, "sexism"), " and ", React.createElement("a", {href: "https://lgbt.foundation/donate", target: "_blank"}, "homophobia and transphobia"), "."
          ), 

          React.createElement("p", null, 
            React.createElement("a", {href: "https://www.vanityfair.com/news/2022/04/elon-musk-twitter-terrible-things-hes-said-and-done", target: "_blank"}, "Don't be fooled!")
          ), 

          React.createElement("p", {className: "fromTwitter-thankyou"}, 
            "Thank you for reading about the risks of Website Takeover, you can now navigate to the real content:"
          ), 

          React.createElement("ul", {className: "fromTwitter-choices"}, 
            React.createElement("li", null, 
              React.createElement("div", null, " If you know if ", this.props.question.name, " is a pokemon or a big data tech:"), 
              React.createElement("button", {className: "btn btn-lg btn-primary", onClick: this.startGame}, "Play the game")
            ), 
            React.createElement("li", null, 
              React.createElement("div", null, "If you're looking for a company that values differences:"), 
              React.createElement("a", {href: "https://contentsquare.com/careers/", target: "_blank", className: "btn btn-lg btn-default fromTwitter-careers"}, "Come work with me")
            )
          )
        )
      )
    )
  }
});

