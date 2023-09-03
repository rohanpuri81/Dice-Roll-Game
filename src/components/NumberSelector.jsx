import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector=(props)=>{

    const arrNumber = [1,2,3,4,5,6];

    const numberSelecterHandler=(val)=>{
        props.setSelectedNumber(val)
        props.setError();
    }

    return(
        <NumberSelectorContainer>
                <ErrP>{props.error}</ErrP>
            <div className='flex'>
                {
                    arrNumber.map((val,ind)=>{
                        return(
                            <Box
                            isSelected={val==props.selectedNumber}
                            key={ind}
                            onClick={()=>{
                                numberSelecterHandler(val);
                            }}
                            >{val}</Box>
                        );
                    })
                }
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    );
}

export default NumberSelector;

const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
     .flex{
        display: flex;
        gap: 24px;
     }
     p{
        font-size: 24px;
        font-weight: 500;
     }
`;

const Box = styled.div`
   width:72px;
   height: 72px;
   border: 2px solid black;
   display: grid;
   place-items: center;
   font-size: 24px;
   font-weight: 700;
   background-color: ${(props)=>props.isSelected?"black":"white"};
   color: ${(props)=>props.isSelected?"white":"black"};
`;

const ErrP=styled.p`
color: red;

`;