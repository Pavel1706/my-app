import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import p from './Affairs.module.css'
import {Button, Grid, TextField} from '@material-ui/core'

export type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (Filter: FilterType) => void
    deleteAffairCallback: (id:number)=>void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) =>  (
        <Grid container direction='column'>

        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
        </Grid>
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

            <Button  color='primary' onClick={setAll} className={cAll}>All</Button>
            <Button color='secondary' onClick={setHigh} className={cHigh}>High</Button>
            <Button color='inherit' onClick={setMiddle} className={cMiddle}>Middle</Button>
            <Button color='primary' onClick={setLow} className={cLow}>Low</Button>

        </div>
    )
}

export default Affairs
