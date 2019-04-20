import React from "react";
import "./AutocompleteApp.css";
import PredictionList from "./PredictionList";
import books from "./books.js";

export default class AutocompleteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { autocomplete: "" };
  }

  handleChange = event => {
    this.setState({ autocomplete: event.target.value });
  };

  render() {
    let values;
    if (this.state.autocomplete !== "") {
      values = books.data.filter(ele => {
        return (
          ele.title.toUpperCase().includes(this.state.autocomplete.toUpperCase()) ||
          ele.description.toUpperCase().includes(this.state.autocomplete.toUpperCase()) ||
          ele.primaryCategory.toUpperCase().includes(this.state.autocomplete.toUpperCase())
        );
      });
    } else {
      values = [];
    }
    return (
      <form className="autocomplete-app">
        <div className="input-container">
          <input type="text" autoFocus onChange={this.handleChange} value={this.state.autocomplete} />
          <span>{`${values.length} coincidences`}</span>
        </div>
        <ul className="autocomplete-suggestions">
          {values.map((ele, index) => (
            <PredictionList item={ele} key={index} autocomplete={this.state.autocomplete}/>
          ))}
        </ul>
      </form>
    );
  }
}
