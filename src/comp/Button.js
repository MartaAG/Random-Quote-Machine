import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.randomize = this.randomize.bind(this);
  }

  randomize() {
    return Math.floor(Math.random()*this.props.quotesLength)
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
