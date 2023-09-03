import styled from "styled-components"
import StartGame from './components/StartGame'
import GamePlay from "./components/GamePlay";
import { useState } from "react"


function App() {
  const [isGameStarted,setIsGameStarted]=useState(true);

  const toogleGameplay = ()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <AppDiv>
      {
         isGameStarted?<GamePlay/>:<StartGame 
         toggle={toogleGameplay}
         />
      }
    </AppDiv>
  )
}

export default App

let AppDiv = styled.div`
  max-width: 1230px;
  margin: 0 auto;
`;
