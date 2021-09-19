import React, {useState} from 'react'
import Affairs, {AffairsPropsType} from './Affairs'
import p from './Affairs.module.css'
import {Container, Paper} from "@material-ui/core";
import { Grid } from '@material-ui/core';


export type AffairPriorityType = 'high'|'low'|'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[]=> {
    if (filter === 'all') return affairs;

    else return affairs.filter(t=>t.priority===filter)
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): AffairType[] => {
    return affairs.filter(t=> t._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className='mainmenu' >
            <hr/>
            homeworks 2
            {/*<Container fixed>*/}

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />


            {/*</Container>*/}
        </div>
    )
}

export default HW2
