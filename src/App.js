
import './App.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from './component/Box';


function App() {

  
  const count = useSelector(state=>state.count)
  //모든 state가 필요한것이 아니니까 객체에서 count의 값만 가져옴
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)

  



  const dispatch = useDispatch();

  const goUp=()=>{
    dispatch({type:"INCREMENT",payload:{num:5}})
    //타입은 액션의 이름 페이로드는 매개변수같은거 필요한정보 보냄
  }

  const login=()=>{
    dispatch({type:"LOGIN",payload:{id:"na",password:"123"}})

  }

  const goDown=()=>{
    dispatch({type:"DECREMENT",payload:{num:2}})
  }

  return (
    <div >
      <h1>{id},{password}</h1>
        <div>클릭횟수:{count}</div>
        <button onClick={goUp}>증가</button>
        <button onClick={login}>로그인</button>
        <button onClick={goDown}>감소</button>
        <Box/>
    </div>
  );
  



  


  
}

export default App;
