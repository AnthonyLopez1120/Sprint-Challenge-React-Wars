import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    background:rgba(26,156,299,.5);
    width: 300px;
    margin: 30px auto;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 3px 3px 12px #0a8cd5;
    border-radius: 10px;
`;
const Characters = (props)=>{

    return(
        <Card>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>{props.birthyear}</p>
            <p>Eye Color:{props.eye_color}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Height: {props.height}</p>
         </Card>
    )

}

export default Characters;
