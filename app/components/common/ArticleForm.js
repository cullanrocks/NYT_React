import React, { Component } from "react";
import API from "../../utils/API";

class ArticleForm extends Component {

      constructor() {
    super();
    this.state = {
      searchQuery: "",
      startYear: "",
      endYear: "",
      results: [],
      saved: []
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.setTerm = this.setTerm.bind(this);
  }


    componentWillMount(){
    // API.getArticle().then(function(data){
    //   this.setState({results:data});
    // }.bind(this));
  }

  componentDidUpdate(){
    // API.getArticle().then(function(response){
    //   console.log(response)
    // })
  }

  setTerm(searchQuery, startYear, endYear){
    this.setState({
      searchQuery: searchQuery,
      startYear: startYear,
      endYear: endYear
    })
  }


handleInputChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
}

  handleButtonClick(event) {
    event.preventDefault();
    API.saveArticles(this.state.searchQuery, this.state.startYear, this.state.endYear).then((data)=>{
      console.log(data)
    });
    }
  
  render() {
    return (
      <form id="postForm">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="searchQuery" name="searchQuery"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
            />
            <label className="mdl-textfield__label" htmlFor="searchQuery">Search for an article</label>
        </div>
        <br/>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="startYear" name="startYear"
            onChange={this.handleInputChange}
            value={this.state.startYear}
            />
            <label className="mdl-textfield__label" htmlFor="startYear">Year Start</label>
        </div>
        <br/>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="endYear" name="endYear"
            onChange={this.handleInputChange}
            value={this.state.endYear}
            />
            <label className="mdl-textfield__label" htmlFor="endYear">Year End</label>
        </div>
        <br/>
        <button id="submitPost" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.handleButtonClick}>Submit</button>
    </form>
    );
  }
}

export default ArticleForm;