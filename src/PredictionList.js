import React from "react";

export default props => {
  const phrase = `${props.item.title} - ${props.item.edition}`;
  const regex = RegExp(`(${props.autocomplete})`, "gi");
  const phraseArray = phrase.split(regex);

  return (
    <li>{phraseArray.map(ele => (ele.toUpperCase() === props.autocomplete.toUpperCase() ? <span className="bold">{ele}</span> : <span>{ele}</span>))}</li>
  );
};
