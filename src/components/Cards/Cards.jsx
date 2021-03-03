import React from 'react'
import {Card ,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'

const Cards = ({data:{ confirmed ,recovered , deaths,lastUpdate}}) => {
    
    return (
        <div className = {styles.container}>
          <Grid container  spacing = {3} justify = 'center'>
            <Grid item component = {Card}>
                <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Infected</Typography>
                <Typography variant = 'h5'><CountUp start = {0} end = {confirmed.value} duration = {2.0} / ></Typography>
                <Typography variant = 'textSecondart'></Typography>
                <Typography variant= 'body2'>Number of active cases of Covid 19</Typography>
                </CardContent>
            </Grid>
            <Grid item component = {Card}>
                <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Recovered</Typography>
                <Typography variant = 'h5'>{recovered.value}</Typography>
                <Typography variant = 'textSecondart'>Real Data</Typography>
                <Typography variant= 'body2'>Number of recovered cases of Covid 19</Typography>
                </CardContent>
            </Grid>
            <Grid item component = {Card}>
                <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Deaths</Typography>
                <Typography variant = 'h5'>{deaths.value}</Typography>
                <Typography variant = 'textSecondart'>Real Data</Typography>
                <Typography variant= 'body2'>Number of deaths caused by Covid 19</Typography>
                </CardContent>
            </Grid>
          </Grid>
        </div>
    )
}

export default Cards