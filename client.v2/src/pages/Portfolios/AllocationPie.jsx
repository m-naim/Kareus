import {React,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2'
import  palette  from 'google-palette';
import portfolioService from '../../services/portfolioService'


const data = {
  labels: [ 'a','b'],
  datasets: [
    {
      backgroundColor: palette('tol-rainbow', 10).map((hex)=> '#'+hex),
      data: [10.1,20],
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
      position: "bottom",
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
  const {name} = useParams();
  const[display,setDisplay]=useState(data);
  const fetchData = async () => {
      try{
          const result = await portfolioService.get(name);
          result.allocation= result.allocation.map((item, i) => {
              item.id = i + 1;
              return {...item, ...item.asset}
          });

          result.transactions.forEach((item, i) => {
              item.id = i + 1;
          });
          console.log(result.allocation);
          prepareData(result);
          
      }
      catch{
          console.log("error api");
      }
  };

  

  const prepareData= (pfData)=> {
    const {allocation}= pfData;
    data.labels = allocation.map(s => s.name)
    data.datasets[0].data = allocation.map(s => s.weight * 100)
    data.datasets[0].backgroundColor=palette('tol-rainbow', allocation.length).map(function(hex) {
      return '#' + hex;
    })
    setDisplay(data);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div style={{ width: "440px", height: "500px",padding:'10px' }}>
      <Doughnut data={display} options={chartOptions} />
    </div>
  ) ;
}

export default AllocationPie;