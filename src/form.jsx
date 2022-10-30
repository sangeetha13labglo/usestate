import React, { useState } from "react";

export default function Form() {
    const [form, setForm] = useState();
    const [value, setValue] = useState();
    const [view, setView] = useState(false);
    function state(e) {
        setView(true)
        console.log(view);
    }

    return (
        <>
            <input type="text" placeholder="name" onChange={(e) => setForm(e.target.value)} />
            <input type="text" placeholder="pass" onChange={(e) => setValue(e.target.value)} />
            <button onClick={state}>submit</button>
            {
                view ?
                    <h1> Name : {form}</h1>
                    : <></>
            }
            {
                view ?
                    <h1> Password : {value}</h1>
                    : <></>
            }
        </>
    )
}