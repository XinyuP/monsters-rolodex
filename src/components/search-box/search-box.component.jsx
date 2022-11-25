import "./search-box.styles.css";
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
export default SearchBox;




/*

import { Component } from "react";
import './search-box.styles.css'
// this file is not in isolation from the rest of our application
// styles.css apply to our entire website

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        palceholder={this.props.palceholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;

// no matter where you inport CSS, it will be present on the entire page 


*/