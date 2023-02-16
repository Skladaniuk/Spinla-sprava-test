import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../redux/store';
export const App = () => {
  const value = useSelector(state => state.myValue)
  const dispatch = useDispatch()
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
     {value}
     <button onClick = { () => dispatch(increment(1))}>Increment</button>
     <button onClick={ () => dispatch(decrement(1))}>Decrement</button>
      </div>
    );
  };