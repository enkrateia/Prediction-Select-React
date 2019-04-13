import React from 'react';

import './AutocompleteApp.css';
import books from './books.js';

export default function AutocompleteApp() {
  // TODO: Use the data in `books` to complete this application.
  return (
    <form className="autocomplete-app">
      <input type="text" autoFocus />
      <ul className="autocomplete-suggestions">
        <li>Example suggestion.</li>
      </ul>
    </form>
  );
}
