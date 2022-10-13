import { useSelector, useDispatch } from 'react-redux';
import { set_count, set_message, get_des, set_des } from './store/actions/actions-types';

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

  return (
    <div className="App">
      <button onClick={() => dispatch(set_des())}>Lancer</button>
      <button onClick={() => dispatch(set_count())} > COUNT + 1 </button>
      {messages.map((message, i) => <p key={i}>{message}</p>)}
      <p>{count}</p>
      {des.map((des, i) => 
      <p key={i}>{des.number1} {des.number2} {des.number3}</p>)
      }

      {des.map((des, i) =>
        <p key={i}>{verification(des.number1, des.number2, des.number3)}</p>)
      }

    {/* { console.log((this.getState()))} */}
    
    </div>
  );
}

export default Home;
