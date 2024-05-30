import { useState } from "react"



const Player = ({playerNum, overallScore, currentScore}) => {
const [count, setCount] = useState(0)
  return (
    <div>
<h1>{playerNum}</h1>
<h1>{overallScore}</h1>
<div>
    {currentScore}
</div>
    </div>
  )
}
export default Player