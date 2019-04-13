import React from "react";
import "./AutocompleteApp.css";
import Predictions from "./Predictions";

export default class AutocompleteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { autocomplete: "", coincidences: 0 };
    this.coincidences = 0;
  }

  handleChange = event => {
    this.setState({ autocomplete: event.target.value });
  };

  handlePrediction = number => {
    this.coincidences = number;
  };

  componentDidUpdate(_, prevState) {
    if (prevState.coincidences !== this.coincidences) {
      this.setState({ coincidences: this.coincidences });
    }
  }

  // TODO: Use the data in `books` to complete this application.
  render() {
    return (
      <form className="autocomplete-app">
        <div className="container">
          <input type="text" autoFocus onChange={this.handleChange} value={this.state.autocomplete} />
          <span>{`${this.state.coincidences} coincidences`}</span>
          <div className="element-list">
            <ul className="autocomplete-suggestions">
              <Predictions inputValue={this.state.autocomplete} setPredictions={this.handlePrediction} />
            </ul>
          </div>
        </div>
      </form>
    );
  }
}
