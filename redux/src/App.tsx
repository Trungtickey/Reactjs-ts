
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { act_decrement_n, act_increment_n } from './store/actions';
// import { TypeName } from './util';

function App() {
  // lấy state của store 
  // const count = store.getState(); // ko khuyến khích
  // function component có hook
  const state = useSelector<{count: number}>(state => state) // trả về 1 state gốc
console.log(state);



  const dispatch= useDispatch();
  useEffect(()=>{
    // gửi action lên 
    // const action = act_decrement_n(10);
    dispatch(act_increment_n(100));
  },
[])
  return (
    <div className='container mt-3'>
     <p>{state?.count}</p>
     <button onClick={()=>dispatch(act_increment_n(5))}> click</button>
    </div>
  )
}

export default App