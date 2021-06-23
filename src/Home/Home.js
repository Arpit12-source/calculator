import React, { useState } from 'react';

import "./Home.css";
import { Button } from '@material-ui/core';

const Home =()=>  {
   const [ result, setResult] = useState("");

   const clickHandler=(event)=>{
      console.log(event)
     
        setResult(result.concat(event.target.name))
      

   }
   const clearHandler=()=>{
       setResult("")
   }
   const backHandler=()=>{
       setResult(result.slice(0,result.length-1))
   }
   const resultHandler=()=>{
    try{
       setResult(eval(result).toString())

    }catch(err){
        setResult("Error")
    }
    
   }
        return (
            <div className="calci">
                <input  value={result}/>
                <div className="Home">

                    <div className="Buttons">
                        <div className="firstrow">
                            <button onClick={clearHandler} className="clear highlight" variant="contained">clear</button>
                            <button onClick={backHandler} className="number highlight" variant="contained">c</button>
                            <button name="+" onClick={clickHandler} className="number highlight" variant="contained">+</button>
                        </div>
                        <div className="firstrow">
                            <button name="1" onClick={clickHandler}className="number" variant="contained">1</button>
                            <button name="2"onClick={clickHandler} className="number" variant="contained">2</button>
                            <button name="3" onClick={clickHandler}className="number" variant="contained">3</button>
                            <button name="-"onClick={clickHandler} className="number highlight" variant="contained">-</button>
                        </div>
                        <div className="firstrow">
                            <button name="4" onClick={clickHandler} className="number" variant="contained">4</button>
                            <button name="5" onClick={clickHandler} className="number" variant="contained">5</button>
                            <button name="6" onClick={clickHandler} className="number" variant="contained">6</button>
                            <button name="*" onClick={clickHandler} className="number highlight" variant="contained">*</button>
                        </div>
                        <div className="firstrow">
                            <button name="7" onClick={clickHandler} className="number" variant="contained">7</button>
                            <button name="8" onClick={clickHandler} className="number" variant="contained">8</button>
                            <button name="9" onClick={clickHandler} className="number" variant="contained">9</button>
                            <button name="/" onClick={clickHandler}className="number highlight" variant="contained">/</button>
                        </div>
                        <div className="firstrow">
                            <button name="." onClick={clickHandler}className="number" variant="contained">.</button>
                            <button name="0" onClick={clickHandler} className="number" variant="contained">0</button>
                            <button  onClick={resultHandler} className="result highlight" variant="contained">=</button>
                        </div>


                    </div>
                </div>
            </div>
        )
    
}

export default Home;