import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import {Button} from "@material-ui/core";

export function Header() {
    let [look, setLook] = useState(false)

    function Change() {
        setLook(!look)
        console.log(look)
    }

    return (
        <div>
            <button color="inherit" onMouseOver={Change} >touch me</button>
            {look ? <div><NavLink to={PATH.PRE_JUNIOR}>pre_junior</NavLink></div> : ''}
            {look ? <div><NavLink to={PATH.JUNIOR}>junior</NavLink></div> : ''}
            {look ? <div><NavLink to={PATH.JUNIOR_PLUS}>junior_plus</NavLink></div> : ''}


        </div>
    )
}


