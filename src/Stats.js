import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message, set_des } from './store/actions/actions-types';
import styled from 'styled-components'

function Stats() {
  const { messages, count, des } = useSelector(state => state.message); // on récupère le state du store
  const dispatch = useDispatch(); // permet d'envoyer des actions au store

  // styled components
  const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color:white;
  margin-top: 1%;
`;

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
