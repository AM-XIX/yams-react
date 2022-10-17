import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_des, set_double, set_count_double, set_count_triple } from './store/actions/actions-types';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

// styled components
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-bottom: -7%;
  color:white;
  margin-top: 0%;
`;
const Pstyled = styled.p`
font-size: 1.2em;
`;

function Home() {
  const { count, des, countDouble, countTriple } = useSelector(state => state.des); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store

  useEffect(() => {
    const id = des.length - 1;
    if (id < 0 || des.length === undefined) {
      return;
    } else {
      if (des[id].number1 === des[id].number2 && des[id].number2 === des[id].number3) {
        alert('TRIPLE !');
        dispatch(set_count_triple());
      } else if (des[id].number1 === des[id].number2 || des[id].number2 === des[id].number3 || des[id].number1 === des[id].number3) {
        alert('DOUBLE !');
        dispatch(set_count_double());
      }
    }
  }, [count])


  function lancer() { // fonction qui va envoyer des actions au store
    dispatch(set_count());
    dispatch(set_des());
  }

  return (
    <div className="App">

      <Title>YAMS</Title>
      <center><img src='https://thumbs.gfycat.com/ElatedImpartialArmadillo-max-1mb.gif' width="350" alt='Yams' /></center>
      <button onClick={() => lancer()}>Lancer</button>

      <div>
        <Pstyled>Nombre d'expérience : [{count}] <br></br>
          Nombre de doubles : [{countDouble}]<br></br>
          Nombre de triples : [{countTriple}]</Pstyled>
      </div>

      <div>
        {des.map((des, i) =>
          <p key={i} id={i}>{des.number1} {des.number2} {des.number3}</p>)
        }
      </div>

    </div>

  );
}

export default Home;
