import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import p from './Affairs.module.css'

export type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (Filter: FilterType) => void
    deleteAffairCallback: (id:number)=>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) =>  (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }
    const cAll = p.button + ' ' + (props.filter === 'all' ? p.active: '')
    const cHigh = p.button + ' ' + (props.filter === 'all' ? p.active: '')
    const cMiddle = p.button + ' ' + (props.filter === 'all' ? p.active: '')
    const cLow = p.button + ' ' + (props.filter === 'all' ? p.active: '')


    return (
        <div  className={p.mainmenu}>
            {mappedAffairs}
            <button onClick={setAll} className={cAll}>All</button>
            <button onClick={setHigh} className={cHigh}>High</button>
            <button onClick={setMiddle} className={cMiddle}>Middle</button>
            <button onClick={setLow} className={cLow}>Low</button>
        </div>
    )
}

export default Affairs
