import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import portfolioService from '../../services/portfolioService';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { round10 } from 'utils/decimalAjustement';
import MultiSelect from 'components/MultiSelect';


const chartDataInit = {
    labels: [],
    datasets: [{
        label: "Performance",
        backgroundColor: 'rgb(109, 99, 255)',
        borderColor: 'rgb(132, 149, 243)',
        data: [0, 1],
    }]
}

const chartOptions = {

    responsive: true,
    maintainAspectRatio: false,
    radius: 0,
    scales: {
        x: {

            ticks: {
                callback: function (val, index) {
                    return val % 3 == 0 ? this.getLabelForValue(val) : '';
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

let benchmarksPerfs = []

function Performance(props) {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [dates, setDates] = useState(chartDataInit.labels);
    const [perfs, setPerfs] = useState(chartDataInit.datasets[0].data);

    const [caCperfs, setCaCperfs] = useState(chartDataInit.datasets[0].data);
    const [snpPerfs, setSnpPerfs] = useState(chartDataInit.datasets[0].data);

    const [period, setPeriod] = useState('ALL');
    const [graphType, setType] = useState('%Variation');

    const formatDateStr= (input)=>{
        return input.map(s=> format(new Date(s), "dd/MM/yyyy"))
    }
    const fetchData = async () => {
        try {
            portfolioService.getPerformances(id);
            const data = await portfolioService.get(id);
            console.log(data);
            datesInit = formatDateStr(data.perfs.date);
            setName(data.name);
            setDates(datesInit)
            perfsData = data.perfs;
            setPerfs(perfsData.performance);

            fetchIndex("FCHI").then(
                res => {
                    setCaCperfs(res)
                    benchmarksPerfs.push({ name: 'FCHI', perfs: res });
                }
            )
            fetchIndex("GSPC").then(
                res => {
                    setSnpPerfs(res)
                    benchmarksPerfs.push({ name: 'GSPC', perfs: res });
                }
            )
        }
        catch {
            console.log("error api");
        }
    };

    const fetchIndex = async (idxName,length=datesInit.length) => {

        const data = await portfolioService.getStocksContains(idxName);
        let values = data[0].history.slice(-length).map(h => h.Close)

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

        return perfsCAC;

    };


    useEffect(() => {
        fetchData();
    }, []);

    const handlePeriodClick = (period) => {
        setPeriod(period);
        const fchiperfs = benchmarksPerfs.find((e) => e.name === 'FCHI').perfs
        const gsccPerfs = benchmarksPerfs.find((e) => e.name === 'GSPC').perfs

        let perf = perfsData.performance
        let data
        let days= datesInit.length
        switch (period) {
            case 'ALL':
                break;
            case '1M':
                days=30;
                break;
            case '6M':
                days=180;

                break;
            case '1Y':
                days=365;
                break;
            default:
                break;
        }

        data = perfsData.performance.slice(-days)
        if(period!='ALL') perf=data.map(x => (x - data[0]));
        setDates(datesInit.slice(-days));
        setPerfs(perf);
        setCaCperfs(fchiperfs.slice(-days).map(x => x - fchiperfs[fchiperfs.length - days]))
        setSnpPerfs(gsccPerfs.slice(-days).map(x => x - gsccPerfs[gsccPerfs.length - days]))
    }

    const handleTypeSelect=(type)=>{
        setType(type)
        switch (type) {
            case 'Valeur':
                setPerfs(perfsData.total);
                break;
            case '%Variation':
                setPerfs(perfsData.performance);
                break;
            case 'Profits/Perts':
                setPerfs(perfsData.pnl);
            default:
                break;
        }
    }
    return (
        <div className='flex flex-col lg:flex-row max-w-4xl'>

            <div className='md:p-6 mt-2 flex flex-col items-center w-full'>
                <MultiSelect list={['Valeur', 'Profits/Perts', '%Variation']} active={graphType} select={handleTypeSelect} />

                <div className='w-full m-2 min-h-[400px]'>
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
                <MultiSelect list={['1M', '6M', '1Y', 'ALL']} active={period} select={handlePeriodClick} />
            </div>

            <div className='w-1/2 min-w-[10em] m-10 hidden'>

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