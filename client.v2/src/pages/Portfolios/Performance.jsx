import React, { useState,useEffect } from 'react';
import {Line} from 'react-chartjs-2'
import portfolioService from '../../services/portfolioService';
import { useParams } from 'react-router-dom';


const chartDataInit= {
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
 let perfsData= {};
 let datesInit= [];

function Performance(props) {

    const {name} = useParams();
    const [dates, setDates] = useState(chartDataInit.labels);
    const [perfs, setPerfs] = useState(chartDataInit.datasets[0].data);
    

    const fetchData = async () => {
        console.log(name);
        try{
            const data = await portfolioService.get(name);
            datesInit= data.perfs.date;
            setDates(datesInit)
            perfsData=data.perfs;
            setPerfs(perfsData.cum_All.map(x=> (x-1)*100 ));
        }
        catch{
            console.log("error api");
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    const handlePeriodClick= (period)=>{
        switch (period){
            case 0:
                setDates(datesInit);
                setPerfs(perfsData.cum_All.map(x=> (x-1)*100 ));
                break;
            case -30:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_1M.slice(period).map(x=> (x-1)*100 ));
                break;
            case -180:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_6M.slice(period).map(x=> (x-1)*100 ));
                break;
            case -365:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_1Y.slice(period).map(x=> (x-1)*100 ));
                break;
            default:
                break;
        }
    }

    return(
        <div className='w-full flex flex-col items-center'> 
            <div className='md:w-2/3'>
                <Line 
                id={'perf'}
                data={
                    {
                        labels: dates,
                        datasets: [{
                        label: "Performance",
                        backgroundColor: 'rgb(109, 99, 255)',
                        borderColor: 'rgb(132, 149, 243)',
                        data: perfs,
                        }]
                    }
                } 
                options={chartOptions} />
            </div>
            <div className='flex gap-6'>
                <button onClick={()=>handlePeriodClick(-30)}>1M</button>
                <button onClick={()=>handlePeriodClick(-180)}>6M</button>
                <button onClick={()=>handlePeriodClick(-365)}>1Y</button>
                <button onClick={()=>handlePeriodClick(0)}>ALL</button>
            </div>
        </div>
    );
}

export default Performance;