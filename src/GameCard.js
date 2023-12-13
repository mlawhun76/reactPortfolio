

function GameCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
            <h3>Game: {props.game.name}</h3>
            <h5>ID: {props.game.id}</h5>
            <h5>Rating: {props.game.rating}</h5>
            <h5>Category: {props.game.category}</h5>
            <p>{props.game.description}</p>


        </div>
    )
}

export default GameCard;
