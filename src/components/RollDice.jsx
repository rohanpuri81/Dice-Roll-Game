import React, { useState } from 'react';
import styled from 'styled-components';

const RollDice =(props)=>{


    return(
        <DiceContainer>
           <div className='dice'
           onClick={()=>{
            props.roleDice();
           }}
           >
            <img src={`./dice_${props.currentDice}.png`} alt="dice_image" />
           </div>
           <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
}

export default RollDice;

const DiceContainer= styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 48px;
   p{
    font-size: 24px;
    font-weight: 400;
   }
   .dice{
     cursor: pointer;
   }
`;