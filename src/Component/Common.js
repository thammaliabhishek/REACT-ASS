import React,{useState} from 'react';
import Functional from './Function';
import Class from './Class';



const Common = () => {
  const [show,setShow]=useState(false);
  let button1=()=>{
    setShow(!show);
  }

  const [show2,setShow2]=useState(false);
  let button2=()=>{
    setShow2(!show2);
  }


  

    return (
        <>
            <h1 className='one'>Styling using Functional and Class Component</h1>
            <button  onClick={()=>{button1();}} className='btn1'>To see styling in functional component</button>
            <button  onClick={()=>{button2();}} className='btn2'>To see styling in class component</button>

            {show && <Functional/>}
            {show2 && <Class/>}
            
        </>
    )
}

export default Common
