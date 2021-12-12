import { Paper } from '@material-ui/core';
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2'

const API_URL = 'http://127.0.0.1:5000/api/v1/portfolio/performance'

const chartData= {
    labels: [1,2,3,4,5,6,7],
    datasets: [{
    label: "Performance",
    backgroundColor: 'rgb(109, 99, 255)',
    borderColor: 'rgb(132, 149, 243)',
    data: [1,2,3,4,7,4,5],
    }]
}

const chartOptions= {
    radius:0, 
    scales: {
     x: {
        ticks: {
            display: false
       },
       grid: {
         display: false,
       }

    }
 }
 }

function Performance({perfs=chartData}) {
    return(
        <Paper style={{ padding: '10px',width:'70vw', height: 'auto', overflow:'hidden'}}>
           <Line 
           id={'perf'}
           data={perfs} 
           options={chartOptions} />
        </Paper>
    );
}

export default Performance;