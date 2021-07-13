import React,{useState} from 'react';

const Counter =()=> {

    let [score,setScore]= useState(0)
    return(
      <div>
          <h1>COUNTER APPLICATION</h1>
          <h4>THE VALUE OF SCORE IS {score}</h4>
          <button onClick={()=>(score<25) ?setScore(score+1): ""}>Increment</button>
          <button onClick={()=>(score>0) ?setScore(score-1): ""}>Decrement</button>
          <button onClick={()=>{setScore(0)}}>Reset</button>
        
     </div>
        
        
    )
 }
 export default Counter
