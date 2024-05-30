import Instructions from "../pages/Instructions"

const GameButton = () => {
    const startGame = () =>{
<Instructions/> 
    }
  return (
    <button type="button" className="game-btn" onClick={startGame}></button>
  )
}
export default GameButton