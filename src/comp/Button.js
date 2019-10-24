import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.randomize = this.randomize.bind(this);
  }
//function randomize takes props of function setIndex from parent and quotesLength and make random index
  randomize() {
     this.props.setIndex(Math.floor(Math.random()*this.props.quotesLength))
  }
  render() {
    return (
      <div>
        <button onClick={this.randomize}>Random!</button>
      </div>
    )
  }
}

export default Button
