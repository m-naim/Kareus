import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import portfolioService from '../../services/portfolioService';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { round10 } from 'utils/decimalAjustement';


const chartDataInit = {
    labels: [new Date()],
    datasets: [{
        label: "Performance",
        backgroundColor: 'rgb(109, 99, 255)',
        borderColor: 'rgb(132, 149, 243)',
        data: [0,1],
    }]
}

const chartOptions = {
    radius: 0,
    scales: {
        x: {

            ticks: {
                callback: function (val, index) {
                    let date = new Date(this.getLabelForValue(val));
                    let toDisplay = format(date, "dd MMM");
                    return val % 3 == 0 ? toDisplay : '';
                },
            },
            grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
                drawTicks: true,
            }

        }
    },
    intersect: true,
    interaction: {
        intersect: false,
        mode: 'index',
    },
}
let perfsData = {};
let datesInit = [];

function Performance(props) {

    const { name } = useParams();
    const [dates, setDates] = useState(chartDataInit.labels);
    const [perfs, setPerfs] = useState(chartDataInit.datasets[0].data);

    const [caCperfs, setCaCperfs] = useState(chartDataInit.datasets[0].data);
    const [snpPerfs, setSnpPerfs] = useState(chartDataInit.datasets[0].data);

    const fetchData = async () => {
        try {
            const data = await portfolioService.get(name);
            datesInit = data.perfs.date;
            setDates(datesInit)
            perfsData = data.perfs;
            setPerfs(perfsData.cum_All.map(x => (x - 1) * 100));
        }
        catch {
            console.log("error api");
        }
    };

    const fetchIndex= async (idxName) => {

            const data = await portfolioService.getStocksContains(idxName);
            let values = data[0].history.map(h => h.Close).slice(dates.length);

            let x = 1;
            let perfsCAC = values.map((currVal, index) => {
                if (index === 0) {
                    return 0;
                }

                const prevVal = values[index - 1];
                return ((currVal - prevVal) / prevVal);
            })
            .map(v => {
                    x = x * (1 + v);
                    return (x - 1) * 100;
                }
            );
            console.log(perfsCAC);
            return perfsCAC;

    };


    useEffect(() => {
        fetchData();
        fetchIndex("FCHI").then(
            res=> setCaCperfs(res)
        )
        fetchIndex("GSPC").then(
            res=> setSnpPerfs(res)
        )

    }, []);

    const handlePeriodClick = (period) => {
        switch (period) {
            case 0:
                setDates(datesInit);
                setPerfs(perfsData.cum_All.map(x => (x - 1) * 100));
                break;
            case -30:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_1M.slice(period).map(x => (x - 1) * 100));
                break;
            case -180:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_6M.slice(period).map(x => (x - 1) * 100));
                break;
            case -365:
                setDates(datesInit.slice(period));
                setPerfs(perfsData.cum_1Y.slice(period).map(x => (x - 1) * 100));
                break;
            default:
                break;
        }
    }

    return (
        <div className='w-screen flex flex-col lg:flex-row'>

            <div className='p-10 flex flex-col items-center w-5/6 '>
                <div className='w-full min-w-[22em]'>
                    {dates.length > 0 ?
                        <Line
                            id={'perf'}
                            data={
                                {
                                    labels: dates,
                                    datasets: [{
                                        label: "Performance",
                                        backgroundColor: 'rgb(109, 99, 255)',
                                        borderColor: 'rgb(109, 99, 255',
                                        data: perfs,

                                    },
                                    {
                                        label: "CAC40",
                                        backgroundColor: 'rgb(255, 99, 155)',
                                        borderColor: 'rgb(255, 99, 155)',
                                        data: caCperfs,
                                    },
                                    {
                                        label: "S&P 500",
                                        backgroundColor: 'rgb(99, 255, 155)',
                                        borderColor: 'rgb(99, 255, 155)',
                                        data: snpPerfs,
                                    }
                                    ]
                                }
                            }
                            options={chartOptions} />
                        : null
                    }

                </div>
                <div className='flex gap-6'>
                    <button onClick={() => handlePeriodClick(-30)}>1M</button>
                    <button onClick={() => handlePeriodClick(-180)}>6M</button>
                    <button onClick={() => handlePeriodClick(-365)}>1Y</button>
                    <button onClick={() => handlePeriodClick(0)}>ALL</button>
                </div>
            </div>
            <div className='w-1/2 min-w-[10em] m-10'>

                <div>
                    <h3 className='m-4 text-xl text-gray-600'>Comparaison</h3>
                    <div className='border-b grid grid-cols-2 p-4'>
                        <p>{name} </p>
                        <p>{round10(perfs.slice(-1)[0] - 1, -2)}%</p>
                    </div>
                    <div className='grid grid-cols-2 p-4'>
                        <p> CAC40 </p>
                        <p>{round10(caCperfs.slice(-1)[0] - 1, -2)}%</p>
                    </div>
                    <div className='grid grid-cols-2 p-4'>
                        <p> S&P 500 </p>
                        <p>{round10(snpPerfs.slice(-1)[0] - 1, -2)}%</p>
                    </div>
                </div>

                <div className='flex m-4 gap-4'>
                    <div className='shadow p-4'>CAC 40</div>
                    <div className='shadow p-4'>S&P 500</div>
                </div>
            </div>
        </div>
    );
}

export default Performance;