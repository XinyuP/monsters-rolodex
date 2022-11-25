import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({monsters}) => (
  //return (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
  //);
  // implicit return
  
)

export default CardList;
 
// import { Component } from "react";
// import Card from "../card/card.component";
// import "./card-list.styles.css";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props; // destructure

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
 


// import { Component } from "react";
// import "./card-list.styles.css";
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props; // destructure
//     return (
//       <div className="card-list">
//         {monsters.map(monster => (
//           <h1 key={monster.id}>{monster.name}</h1>
//         ))}
//       </div>
//     );
//   }
// }

// export default CardList;

