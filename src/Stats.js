import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// styled components
const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color:white;
  margin-top: 1%;
`;

const Pstyled = styled.p`
font-size: 1.4em;
`;

function Stats() {
  const { count, des, countDouble } = useSelector(state => state.des); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store

  return (
    <div className="App">

      <Title>Statistiques</Title>
      <Pstyled>Nombre d'expérience : [{count}] <br></br>
      Nombre de doubles : [{countDouble}]</Pstyled>

    </div>

  );
}

export default Stats;
