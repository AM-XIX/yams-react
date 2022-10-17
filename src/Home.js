import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_des, set_double, set_count_double } from './store/actions/actions-types';
import styled from 'styled-components'

// styled components
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-bottom: -7%;
  color:white;
  margin-top: 0%;
`;

function Home() {
  const { count, des } = useSelector(state => state.des); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store 

  function lancer() { // fonction qui va envoyer des actions au store
    dispatch(set_count());
    dispatch(set_des());
  }

  function launchVerif() {
    const id = des.length - 1;
    if (id < 0 || des.length === undefined) {
      return;
    } else {
      verification(des[id].number1, des[id].number2, des[id].number3);
    }
  }

  function verification(number1, number2, number3) {
    if (number1 === number2 && number2 === number3) {
      alert('TRIPLE !');
    } else if (number1 === number2 || number2 === number3 || number1 === number3) {
      alert('DOUBLE !');
      // dispatch(set_double([number1, number2, number3]));
    }
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

      {launchVerif()}

    </div>

  );
}

export default Home;
