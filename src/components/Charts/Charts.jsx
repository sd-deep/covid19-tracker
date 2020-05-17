import React, { useState, useEffect} from 'react';
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2';

import styles from './Charts.module.css'

const Charts = ({ data : {confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData ]=useState([]);
   
    useEffect(() => {
        
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        console.log('fetching daily data')
        fetchAPI()

        return () => {
            console.log('unmounting charts');
            
        }
    }, []);

    const lineChart = (
            dailyData.length 
            ?(
                <Line
                    data={{
                        labels : dailyData.map(({date})=> new Date(date).toDateString().slice(0,10) ),
                        datasets : [{
                            data : dailyData.map(({confirmed})=> confirmed),
                            label : 'Infected',
                            borderColor : 'rgba(83, 0, 191, 1)',
                            
                            fill : true,
                        },{
                            data : dailyData.map(({deaths})=> deaths),
                            label : 'Deaths',
                            borderColor : 'red',
                            backgroundColor : 'rgba(191, 41, 0, 1)',
                            fill : true,
                        }],
                    }}
                    options ={{
                        maintainAspectRatio: false,                        
                    }}
                />) : null
    )

    console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels : ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label : 'People',
                            backgroundColor : [
                                'rgba(83, 0, 191, 1)', 
                                'rgba(0, 191, 166, 1)', 
                                'rgba(191, 41, 0, 1)'
                            ],
                            data : [confirmed.value, recovered.value, deaths.value]
                        }]                        
                    }}
                    options ={{
                        maintainAspectRatio: false,
                        legend : { display : false},
                        title : { display : true, text : `Current state in ${country}`}
                        
                    }}

                />) : null
    )


    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;