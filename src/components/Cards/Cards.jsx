import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core'

import CountUp from 'react-countup'
import {useSpring, animated} from 'react-spring'

import styles from './Cards.module.css'
import cx from 'classnames';


const Cards = ( { data : { confirmed, recovered, deaths, lastUpdate}}) => {
    const props = useSpring({opacity: 1, marginTop : 50, from: {opacity: 0, marginTop : 0}})
    if(!confirmed){
            return "";
    }
    return (
        <animated.div style={props} className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={ Card } xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp
                                start = {0}
                                end = {confirmed.value}
                                duration = {2.5}
                                separator ={","}
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2" component="p">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={3}  className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp
                                start = {0}
                                end = {recovered.value}
                                duration = {2.5}
                                separator ={","}
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="body2" component="p">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs={12} md={3}  className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp
                                start = {0}
                                end = {deaths.value}
                                duration = {2.5}
                                separator ={","}
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="body2" component="p">Number of deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </animated.div>
    )
}

export default Cards;