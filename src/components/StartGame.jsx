import React from 'react';
import styled from 'styled-components';

const StartGame = ({toggle}) => {
    return(
        <div>
            <Container>

                <div className="box">
                <img src="/dices.png" alt="" />
                </div>
                <div className='content'>
                    <h1>DICE GAME</h1>
                    <div className="bb">
                    <Button onClick={toggle}>Play Now</Button>
                    </div>
                    
                </div>
            </Container>
        </div>
        
    );
}

export default StartGame;

const Container =styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;


   .content{
     h1{
        font-size: 96px;
        white-space: nowrap;
     }
     .bb{
        display: flex;
        justify-content: end;
     }
   }
`
const Button = styled.button`
    padding: 10px 10px;
    gap: 10px;
    font-size: 16px;
    border: 1px solid transparent;
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
        border: 1px solid black;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    }
`