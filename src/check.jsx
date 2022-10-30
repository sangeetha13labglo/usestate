import React, { useState } from "react";

export default function Check(){
    const [click,setClick] = useState(0);
    return(
        <>
           <p>you clicked {click} times!</p> 
           <button onClick={()=>setClick(click + 1)}>Increase</button>
           <button onClick={()=>setClick(click - 1)}>Decrease</button>
        </>
    )
}