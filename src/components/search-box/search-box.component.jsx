import { Component } from "react";

import './search-box.styles.css'
class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        palceholder={this.props.palceholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;

// import "./search-box.styles.css";

// const SearchBox = ({ className, placeholder, onChangeHandler }) => (
//   <input
//     className={`search-box ${className}`}
//     type="search"
//     placeholder={placeholder}
//     onChange={onChangeHandler}
//   />
// );

// export default SearchBox;
