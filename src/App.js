import React from "react";
import axios from "axios";

import Search from "./components/search/Search.component";
import Results from "./components/results/Results.component";
import Popup from "./components/popup/Popup.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      results: [],
      selected: {},
    };
  }

  search = (e) => {
    const apiUrl = "http://www.omdbapi.com/?apikey=3b592e53";
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + this.state.userInput).then(({ data }) => {
        let results = data.Search;
        this.setState({
          results: results,
        });
      });
    }
  };

  handleInput = (e) => {
    let userInput = e.target.value;
    this.setState({
      userInput: userInput,
    });
  };

  openPopup = (id) => {
    const apiUrl = "http://www.omdbapi.com/?apikey=3b592e53";
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      this.setState({
        selected: result,
      });
    });
  };

  closePopup = () => {
    this.setState({
      selected: {},
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Movie Selection</h1>
        </header>
        <main>
          <Search handleInput={this.handleInput} search={this.search} />
          <Results results={this.state.results} openPopup={this.openPopup} />
          {typeof this.state.selected.Title != "undefined" ? (
            <Popup
              selected={this.state.selected}
              closePopup={this.closePopup}
            />
          ) : (
            false
          )}
        </main>
      </div>
    );
  }
}

export default App;
