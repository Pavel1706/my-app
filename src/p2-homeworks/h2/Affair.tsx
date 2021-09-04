import React from 'react'
import {AffairType} from "./HW2";
import p from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id:number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

        const firstClass = p.item + ' ' + p[props.affair.priority]
    return (
        <div>
            <div className={p.item}>{props.affair.name}</div>
            <div className={firstClass}>[{props.affair.priority}]</div>
            <button onClick={deleteCallback} className={p.item + ' ' + p.button}>X</button>
        </div>
    )
}

export default Affair
