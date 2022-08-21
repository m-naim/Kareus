import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import portfolioService from '../../services/portfolioService';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { round10 } from 'utils/decimalAjustement';
import MultiSelect from 'components/MultiSelect';


const chartDataInit = {
    labels: [new Date()],
    datasets: [{
        label: "Performance",
        backgroundColor: 'rgb(109, 99, 255)',
        borderColor: 'rgb(132, 149, 243)',
        data: [0, 1],
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

let benchmarksPerfs = []

function Performance(props) {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [dates, setDates] = useState(chartDataInit.labels);
    const [perfs, setPerfs] = useState(chartDataInit.datasets[0].data);

    const [caCperfs, setCaCperfs] = useState(chartDataInit.datasets[0].data);
    const [snpPerfs, setSnpPerfs] = useState(chartDataInit.datasets[0].data);

    const [period, setPeriod] = useState('ALL');
    const [graphType, setType] = useState('%_variation');

    const fetchData = async () => {
        try {
            const data = await portfolioService.get(id);
            datesInit = data.perfs.date;
            setName(data.name);
            setDates(datesInit)
            perfsData = data.perfs;
            setPerfs(perfsData.cum_All.map(x => (x - 1) * 100));
        }
        catch {
            console.log("error api");
        }
    };

    const fetchIndex = async (idxName) => {

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
        return perfsCAC;

    };


    useEffect(() => {
        fetchData();
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
    }, []);

    const handlePeriodClick = (period) => {
        setPeriod(period);
        const fchiperfs = benchmarksPerfs.find((e) => e.name === 'FCHI').perfs
        const gsccPerfs = benchmarksPerfs.find((e) => e.name === 'GSPC').perfs
        switch (period) {
            case 'ALL':
                setDates(datesInit);
                setPerfs(perfsData.cum_All.map(x => (x - 1) * 100));

                setCaCperfs(fchiperfs.slice(-datesInit.length).map(x => x - fchiperfs[fchiperfs.length - datesInit.length]))
                setSnpPerfs(gsccPerfs.slice(-datesInit.length).map(x => x - gsccPerfs[gsccPerfs.length - datesInit.length]))
                break;
            case '1M':
                setDates(datesInit.slice(-30));
                setPerfs(perfsData.cum_1M.slice(-30).map(x => (x - 1) * 100));
                setCaCperfs(fchiperfs.slice(-30).map(x => x - fchiperfs[fchiperfs.length - 30]))
                setSnpPerfs(gsccPerfs.slice(-30).map(x => x - gsccPerfs[gsccPerfs.length - 30]))
                break;
            case '6M':
                setDates(datesInit.slice(-180));
                setPerfs(perfsData.cum_6M.slice(-180).map(x => (x - 1) * 100));
                setCaCperfs(fchiperfs.slice(-180).map(x => x - fchiperfs[fchiperfs.length - 180]))
                setSnpPerfs(gsccPerfs.slice(-180).map(x => x - gsccPerfs[gsccPerfs.length - 180]))
                break;
            case '1Y':
                setDates(datesInit.slice(-365));
                setPerfs(perfsData.cum_1Y.slice(-365).map(x => (x - 1) * 100));
                setCaCperfs(fchiperfs.slice(-365).map(x => x - fchiperfs[fchiperfs.length - 365]))
                setSnpPerfs(gsccPerfs.slice(-365).map(x => x - gsccPerfs[gsccPerfs.length - 180]))
                break;
            default:
                break;
        }
    }

    return (
        <div className='w-screen flex flex-col lg:flex-row'>

            <div className='p-2 m-2 flex flex-col items-center w-11/12 max-w-[50em]'>
                <MultiSelect list={['Valeur', 'Profits/Perts', '%_variation']} active={graphType} select={setType} />

                <div className='w-full m-2'>
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