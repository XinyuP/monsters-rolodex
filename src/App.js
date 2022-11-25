import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Comment {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // lifecycle method
  // whatever code in here will get runned when the component mount (the first time a component get placed on DOM)
  // mounting: the first time react render the component onto the page, only happen once through out the component's life
  // the only time when a component remount is if it is unmounted (completely removed from DOM)
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // a promise(async) --> eventually I am gonna have a value
      .then((response) => response.json()) // convert response to json // every .then() that return a value is gonna return another promise that hasn't been resolved
      .then((users) =>
        this.setState(
          () => {
            // using function so that you can pass call back
            return { monsters: users };
          },
          () => {
            // console.log(this.state)
            // call back function
          }
        )
      );
  }

  // when you want to modify an array, you want to modify a new one (immutability)
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />

        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
