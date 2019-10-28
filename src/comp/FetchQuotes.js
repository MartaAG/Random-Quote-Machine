import React from 'react';
import Button from './Button.js'
import SocialMedia from './SocialMedia.js'


class FetchQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: ''
    };
    this.changeQuote = this.changeQuote.bind(this)
  }
  componentDidMount() {
    //here is link to fetch data and to return it in json
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(results => {
      return results.json();
      //iterating over array of quotes to show them all
      //instead of json we got strings
    }).then(data => {
      let texts = data.quotes.map((q) => {
      return (
      `${q.quote} - ${q.author}`
      )
      })
      //changing state: state take an array of quotes
      this.setState({quotes: texts});

    })
    //lifting state up
  }
  changeQuote(quote) {
    this.setState({quote: this.state.quotes[quote]});
  }
  render() {
    return (<div>
      <Button
      setIndex={this.changeQuote}
      quotesLength={this.state.quotes.length}/>
      <div>
        <p>{this.state.quote}</p>
      </div>
      <SocialMedia quote={this.state.quote}/>
    </div>)
  }
}

export default FetchQuotes;
