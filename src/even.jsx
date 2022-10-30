import React, { useState } from "react";

export default function Even() {
  const [click, setClick] = useState(0);
  return (
    <>
      <p>You're clicked {click} time!</p>
      <p>The number of times you have clicked is {click % 2 == 0 ? 'even!' : 'odd!'}</p>
      <button onClick={() => setClick(click => click + 1)}>click me</button>
    </>
  )
}