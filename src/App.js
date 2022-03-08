import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { handleShow } from './Redux/Actions';

function App() {
  const show = useSelector(state => state.show)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(handleShow())}>Show Counter</button>
      {
        show &&  <Counter/>
      }
   
    </div>
  );
}

export default App;
