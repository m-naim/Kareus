import { Paper } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2'

import  palette  from 'google-palette';
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

const data = {
  labels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'],
  datasets: [
    {
      backgroundColor: palette('tol-rainbow', 10).map(function(hex) {
        return '#' + hex;
      }),
      data: [33, 67],
      label:'hello'
    }
  ]
};




const chartOptions = {
  responsive: true,
  plugins: {
    datalabels: {
      color: '#36A2EB'
    },
    legend: {
      display: true,
      position: "right",
      align: "center",
      fontFamily: "Allianz-Neo",
      textDirection: 'ltr',
      labels: {
        usePointStyle: true,
        fontColor: "#006192",
      }
    },
    title: {
      display: true,
      text: 'Chart.js Pie Chart'
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
          return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
        }
      }
    }
  }
}

function AllocationPie({ adata }) {
  if (adata != null) {
    data.labels = adata.map(s => s.symbol)
    data.datasets[0].data = adata.map(s => s.weight * 100)
    data.datasets[0].backgroundColor=palette('tol-rainbow', adata.length).map(function(hex) {
      return '#' + hex;
    })
  }
  return adata.length ? (
    <Paper style={{ width: "440px", height: "500px",padding:'10px' }}>
      <Doughnut data={data} options={chartOptions} />
    </Paper>
  ) : <></>;
}

export default AllocationPie;