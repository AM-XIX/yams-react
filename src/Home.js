import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message, get_des, set_des } from './store/actions/actions-types';

function Home() {
  // lecture du store de la source de vérité read-only
  const { messages, count, des } = useSelector(state => state.message);
  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();

  function showDes() {
    console.log(des);
  }

  function randomDice(min, max) {
    dispatch(set_des(Math.floor(Math.random() * (max - min + 1) + min)))
  }
  
  return (
    <div className="App">
      <button onClick={() => randomDice(1, 6)}>Lancer</button>
      <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      <button onClick={() => dispatch(set_message(Math.random().toString()))} > ADD ALEA MESSAGE </button>
      <button onClick={() => showDes()} >Message Dés</button>
      

    </div>
  );
}

export default Home;
