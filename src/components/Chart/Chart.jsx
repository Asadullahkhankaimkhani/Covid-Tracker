import styles from './Chart.module.css'
import {React, useState,useEffect}from 'react'
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData , setDailyData] = useState([]);

    useEffect(()=> {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[setDailyData]);
    const lineChart = (
        dailyData.length
        ?(<Line
            data = {{
                labels: dailyData.map(({date})=>date ),
                datasets: [{
                    data : dailyData.map(({confirmed}) => confirmed),
                    label : 'Infected',
                    borderColor : '#3333ff',
                    backgroundColor: 'rgba(0,0,255,0.5)',

                    fill : true
                },{
                    data : dailyData.map(({deaths}) => deaths),
                    label : 'Deaths',
                    borderColor : 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill : true
                }]
            }} 
        />):null
        );

    return (
        <div className={styles.container}>
           {lineChart}
        </div>
    )
}

export default Chart
