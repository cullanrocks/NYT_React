import React, { Component } from "react";
import Navbar from "./common/Navbar";
import ArticleForm from "./common/ArticleForm";
import Footer from "./common/Footer";
import API from "../utils/API.js"

class Main extends Component {
  // Here we render the component
  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--drawer mdl-layout--fixed-header">
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">
                    NYT Search
                </span>
                <div className="mdl-layout-spacer"></div>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="/">Home</a>
                    <a className="mdl-navigation__link" href="/search">Search</a>
                    <a className="mdl-navigation__link" href="/favorites">Favorites</a>
                </nav>
            </div>
        </header>
        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">NYT Search</span>
            <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="/">Home</a>
                <a className="mdl-navigation__link" href="/search">Search</a>
                <a className="mdl-navigation__link" href="/favorites">Favorites</a>
            </nav>
        </div>
        <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-phone">
                    </div>
                    <div className="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--6-phone">
                        <div id="postDiv" className="mdl-card__actions">
                            <div className="mdl-card mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-shadow--8dp center">
                                <div className="mdl-card__title">
                                    <h1 className="mdl-card__title-text" id="timestamp">Search for an Article</h1>
                                </div>
                                <div className="mdl-card__supporting-text">

                                    <ArticleForm/>

                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--1-phone">
                    </div>
                {/* /* <Results results={this.state.results} saveArticle={this.saveArticle}/>  Place Holder*/}
                </div>
            </div>
        </main>
    </div>
    </div>
    )
  }
}


export default Main;
