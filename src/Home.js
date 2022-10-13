import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message, set_des } from './store/actions/actions-types';

function Home() {
  // lecture du store de la source de vérité read-only
  const { messages, count, des } = useSelector(state => state.message);
  // actions dispatch dans le reducer => newState 
  const dispatch = useDispatch();
  console.log(messages, count, des);

  function verification(var1, var2, var3) {
    if (var1 === var2 && var2 === var3) {
      return "Gagné";
    }
  }

  function lancer() {
    dispatch(set_count());
    dispatch(set_des());
  }

  return (
    <div className="App">
      <button onClick={() => lancer()}>Lancer</button>
      <p>Nombre d'essais : {count}</p>


      {des.map((des, i) =>
        <p key={i}>{des.number1} {des.number2} {des.number3}</p>)
      }

      {des.map((des, i) =>
        <p key={i}>{verification(des.number1, des.number2, des.number3)}</p>)
      }
    </div>
  );
}

export default Home;
