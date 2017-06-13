import React, { Component } from "react";
import Search from "./common/Search.js";
import ArticleForm from "./common/ArticleForm.js";
import API from "../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one Search.jsx for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Search.jsx
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <QuoteForm
            getQuotes={this.getQuotes}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
    );
  }
}

export default Home;
