import React, { useState } from 'react';
import TotalScore from './TotalScore';
import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import Rules from './Rules';

const GamePlay = () => {
    const [score,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState("");
    const [ruls,setRuls]=useState(false);

    const generateRandomNumber = ()=>{
        return Math.round(Math.random()*5+1)
    }

    const roleDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        const randomNumber=generateRandomNumber()
        setCurrentDice(randomNumber)
        if(selectedNumber===randomNumber){
          setScore((prev)=>prev+5)
        }else{
            setScore((prev)=>prev-1)
        }
        setSelectedNumber(undefined)

    }

    const resetScore=()=>{
        setScore(0);
    }

    return(
        <MainContainer>
           <div className='top_section'>
           <TotalScore score={score}/>
           <NumberSelector 
           selectedNumber={selectedNumber}
           error={error}
           setError={setError}
           setSelectedNumber={setSelectedNumber} 
           />
           </div>
           <RollDice roleDice={roleDice} currentDice={currentDice}/>
           <div className='btns'> 
             <OutlineButton onClick={resetScore}>Reset</OutlineButton>
             <Button onClick={()=>{
                setRuls(true)
             }}></Button>
           </div>
           {ruls?<Rules />:null}
        </MainContainer>
    );
}


export default GamePlay;


const MainContainer = styled.main`
  padding-top: 46px;

    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        display: flex;
        margin-top: 26px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
const Button = styled.button`
    padding: 10px 10px;
    gap: 10px;
    font-size: 16px;
    border: 2px solid transparent;
    min-width: 220px;
    min-height: 44px;

    background: #000000;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease-in-out;

    &:hover{
        background-color: white;
        color: #000000;
        border: 2px solid black;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    }
`;
const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 2px solid black;
    &:hover{
        color: white;
        background-color: black;
    }

`;