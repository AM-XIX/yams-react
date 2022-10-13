import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// styled components
const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color:white;
  margin-top: 1%;
`;
function Stats() {
  const { count, des } = useSelector(state => state.message); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store

  const Pstyled = styled.p`
  font-size: 1.4em;
`;

  return (
    <div className="App">

      <Title>Statistiques</Title>
      <Pstyled>Nombre d'expérience : [{count}]</Pstyled>

    </div>

  );
}

export default Stats;
