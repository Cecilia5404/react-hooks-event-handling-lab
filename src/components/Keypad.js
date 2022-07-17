// Code Keypad Component Here
import React from "react";

function Keypad(){
    return(
    <form>
      <input type="password" name="password" placeholder="Enter password..." 
        onChange={()=>(console.log('Entering password...'))}/>
    </form>
    )
}

export default Keypad;