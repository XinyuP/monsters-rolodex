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


  // only build once 
  // not need to rendering extra anonymous functions whenever the render() is called 
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  // when you want to modify an array, you want to modify a new one (immutability)
  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    // cast them to variables


    const filteredMonsters = monsters.filter((monster) => {
      monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}
        <SearchBox 
          className='monsters-search-box' 
          onChangeHandler={onSearchChange} 
          palceholder='search monsters'  
        />

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

///****!!! component rerender when setState() gets called and when props are updated!!!!! /////////

export default App;
// entire application lives inside of one component 
// tie together the functionality of UI and the actual UI itself 
// visual representation of UI and functional representation if UI 


// we want to tie together reusable portions of code together into one segment

// list of monsters can be a list of anything ----- component
// search bar ----- component

// when create component, generalize the functionality as much as you can --- as reusable as possible
// so that don't have to rewrite a lot of code 

// we want to build reusable bits of code that we can use in multiple places 
// ideally it has a single responsibility 


