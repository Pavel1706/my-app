import React from 'react'
import {AffairType} from "./HW2";
import p from './Affairs.module.css'
import {Button, Container, Grid, IconButton, Paper} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
            <Container fixed>
            <Paper style={{ padding: '10px'} }>
            <Grid container wrap="wrap-reverse" spacing={3}>
            <Grid item xs={12}>
            <div className={p.paper}>{props.affair.name}</div>
            <div className={firstClass}>[{props.affair.priority}]</div>
            <IconButton  onClick={deleteCallback} className={p.item + ' ' + p.button}><Delete /></IconButton>

            </Grid>
        </Grid>
            </Paper>
        </Container>
        </div>
    )
}

export default Affair
