import GameCard from "./GameCard";
const gamesList = [
  {
    id: 0,
    name: "Scythe",
    rating: 4,
    category: "Fun",
    description: "What a FUN game"
  },
  {
    id: 1,
    name: "Machi Koro",
    rating: 2,
    category: "Deck Building",
    description: "IT's alright... if you like building decks"
  },
  {
    id: 2,
    name: "Galaxy Trucker",
    rating: 4,
    category: "Fun",
    description: "Fun but challenging"
  }


]


function App() {
  return (
    <div >
      <h1>My Board Games</h1>
        {gamesList.map(g => <GameCard game={g}/>) }
    </div>
  );
}

export default App;
