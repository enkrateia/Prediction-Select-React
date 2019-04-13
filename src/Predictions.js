import React from "react";
import books from "./books.js";

export default function Predictions(props) {
  let values;
  const validData = props.inputValue === "" ? null : props.inputValue;
  values = books.data
    .filter(ele => {
      return ele.title.includes(validData) || ele.description.includes(validData) || ele.primaryCategory.includes(validData);
    })
    .map((ele, index) => (
      <li key={index}>
        {ele.title} - {ele.edition}
      </li>
    ));
  props.setPredictions(values.length);
  return values;
}
