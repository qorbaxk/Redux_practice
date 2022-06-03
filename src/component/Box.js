import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox';

const Box = () => {
    let count = useSelector((state)=>state.count);
    //어디서든 스토어값 가져오려면 useSelector 쓰기만 하면돼 

  return (
    <div>
        this is box {count}
        <GrandSonBox/>
    </div>
  )
}

export default Box