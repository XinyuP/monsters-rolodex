import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { render } from "@testing-library/react";

/*
!!notes!!
functional component ---- pure function 

react just run this function top to bottom
whatever get returned from this function is the UI  

no constructor

there are no life cycles for functional component

functions pure functions and inpure functions
side effects 


pure function: everything that dictates what it returns is completely isolated from what get passed into it 
               the function return solely be dependent on the props being passed in 
const funcA = (a, b) => {
  return a + b
}


inpure function: 
(1)
rely on something outside of its scope
c = 3
const funcA = (a, b) => {
  return a + b + c
}

(2)
modify something outside of its scope
side effects: function create some effect outside of its scope 
const funcB = (a, b) => {
  c = a + b;
  return a * b
}



In react, we use hooks to create impure functions -- generate side effect
*/




// useState gives us ability to encapsulate local state in a functional component
import { useState } from "react";

// props change and state changes ---> rerun the entire functional component
// cannot just run part of the function, the whole function needs to rerun every single time 

const App = () => {
  console.log('render')
  const [searchField, setsearchField] = useState('aaa'); // [value, setValue]
  // whenever state value(searchField) changes -- trigger rerender of a component -- rerun the function from top to bottom
  console.log(searchField)
  // array destructuring -- useState gives back array of two values
  // if have multiple value in a state -- need multiple useState() calls
  // each hooks only hooks into one value



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setsearchField(searchFieldString)
    
  }


  return (
    <div className="App">
      <h1 className="app-title">
        Monsters Rolodex
      </h1>
      <SearchBox 
        className='monsters-search-box' 
        onChangeHandler={onSearchChange} 
        palceholder='search monsters'  
      />
      {/* <CardList monsters={filteredMonsters}/> */}
    </div>
  );




}




// // class component
// // constructor(), lifecycle method, render() are only unique to class component 
// // what we return from class component is inside of the render()
// class App extends Comment {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // lifecycle method
//   // whatever code in here will get runned when the component mount (the first time a component get placed on DOM)
//   // mounting: the first time react render the component onto the page, only happen once through out the component's life
//   // the only time when a component remount is if it is unmounted (completely removed from DOM)
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users") // a promise(async) --> eventually I am gonna have a value
//       .then((response) => response.json()) // convert response to json // every .then() that return a value is gonna return another promise that hasn't been resolved
//       .then((users) =>
//         this.setState(
//           () => {
//             // using function so that you can pass call back
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state)
//             // call back function
//           }
//         )
//       );
//   }

//   // only build once 
//   // not need to rendering extra anonymous functions whenever the render() is called 
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   // when you want to modify an array, you want to modify a new one (immutability)
//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     // cast them to variables


//     const filteredMonsters = monsters.filter((monster) => {
//       monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">
//           Monsters Rolodex
//         </h1>
//         {/* <input
//           className="search-box"
//           type="search"
//           placeholder="search monsters"
//           onChange={onSearchChange}
//         /> */}
//         <SearchBox 
//           className='monsters-search-box' 
//           onChangeHandler={onSearchChange} 
//           palceholder='search monsters'  
//         />

//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }


export default App;





/*
!!!notes!!!

!! component rerender when setState() gets called and when props are updated!!

entire application lives inside of one component 
tie together the functionality of UI and the actual UI itself 
visual representation of UI and functional representation if UI 


we want to tie together reusable portions of code together into one segment

list of monsters can be a list of anything ----- component
search bar ----- component

when create component, generalize the functionality as much as you can --- as reusable as possible
so that don't have to rewrite a lot of code 

we want to build reusable bits of code that we can use in multiple places 
ideally it has a single responsibility 
*/


