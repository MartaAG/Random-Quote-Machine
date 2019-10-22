import React from 'react';
import Button from './Button.js'

class FetchQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: 0
    };
    this.showQuote = this.showQuote.bind(this)
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(results => {
      return results.json();
    }).then(data => {
      let texts = data.quotes.map((q) => {
      return (
      <p >{q.quote} - {q.author}</p>
      )
      })
      this.setState({quotes: texts});

    })

  }
  showQuote(quote) {
    this.setState({quotes: this.state.quotes[quote]});
  }
  render() {
    return (<div>
      <Button quote={this.showQuote} quotesLength={this.state.quotes.length}/>
      <div>
        {this.state.quotes}
      </div>
      <p ></p>
    </div>)
  }
}

export default FetchQuotes;
