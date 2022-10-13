import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_des } from './store/actions/actions-types';
import styled from 'styled-components'

function Home() {
  const { count, des } = useSelector(state => state.message); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store

  // styled components
  const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-bottom: -7%;
  color:white;
  margin-top: 0%;
`;

  function verification(var1, var2, var3) {
    if (var1 === var2 && var2 === var3) {
      alert("Vous avez gagné");
      return "Gagné";
    }
  }

  function lancer() { // fonction qui va envoyer des actions au store
    dispatch(set_count());
    dispatch(set_des());
  }

  return (
    <div className="App">
      
      <Title>YAMS</Title>
      <center><img src='https://thumbs.gfycat.com/ElatedImpartialArmadillo-max-1mb.gif' width="350" alt='Yams' /></center>
      <button onClick={() => lancer()}>Lancer</button>
      <p>Nombre d'expérience : [{count}]</p>

      {des.map((des, i) =>
        <p key={i} id={i}>{des.number1} {des.number2} {des.number3}</p>)
      }

      {des.map((des, i) =>
        <p key={i}>{verification(des.number1, des.number2, des.number3)}</p>)
      }
      
    </div>
    
  );
}

export default Home;
