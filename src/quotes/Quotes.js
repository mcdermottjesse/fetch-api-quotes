import { Component } from "react"

import QuoteItem from "./QuoteItem"

const api_url_quotes = "https://type.fit/api/quotes"

class Quotes extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    this.getQuotes();
  }


getQuotes() {
  fetch(api_url_quotes)
  .then(response => response.json())
  .then(response_quotes => {
    this.setState({
      quotes: response_quotes
    })
  });
}

render() {

  console.log(this.state.quotes)

  const quoteMap = this.state.quotes.map((quote) => (

    <QuoteItem key={quote.id} quote={quote} />

  ))

  return (

    <div>

      {quoteMap[0]}
      {quoteMap[1]}
      {quoteMap[2]}
      {quoteMap[3]}
      {quoteMap[4]}
      {quoteMap[5]}
      {quoteMap[1642]}


    </div>

  )

}
}

export default Quotes