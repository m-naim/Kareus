import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
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
    intersect: true,
    interaction: {
        intersect: false,
        mode: 'index',
    },
}
let dividendsData = {};


function DividendsView(props) {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [dates, setDates] = useState(chartDataInit.labels);
    const [perfs, setPerfs] = useState(chartDataInit.datasets[0].data);

    const [period, setPeriod] = useState('Annuel');

    const get_years= (input)=>{
        return input.map(s=> format(new Date(s), "yyyy"))
    }
    const get_months= (input)=>{
        return input.map(s=> format(new Date(s), "MMMM yy"))
    }
    const fetchData = async () => {
        try {
            portfolioService.getDividends(id);
            const data = await portfolioService.get(id);
            dividendsData = data.dividends;
            setName(data.name);
            setDates(get_years(dividendsData.yearly.Date))
            setPerfs(dividendsData.yearly.values);
        }
        catch {
            console.log("error api");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePeriodClick = (period) => {
        setPeriod(period);
        switch (period) {
            case 'Annuel':
                setDates(get_years(dividendsData.yearly.Date))
                setPerfs(dividendsData.yearly.values);
                break;
            case 'Mensuel':
                setDates(get_months(dividendsData.monthy.Date))
                setPerfs(dividendsData.monthy.values);
                break;
            default:
                break;
        }

    }

    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='p-6 m-2 flex flex-col items-center  max-w-4xl'>

                <div className='w-full m-2 min-h-[200px]'>
                    {dates.length > 0 ?
                        <Bar
                            id={'Dividends'}
                            data={
                                {
                                    labels: dates,
                                    datasets: [{
                                        label: "Dividends",
                                        backgroundColor: 'rgb(109, 99, 255)',
                                        borderColor: 'rgb(109, 99, 255',
                                        data: perfs,

                                    },
                                    ]
                                }
                            }
                            options={chartOptions} />
                        : null
                    }

                </div>
                <MultiSelect list={['Mensuel', 'Annuel']} active={period} select={handlePeriodClick} />
            </div>
        </div>
    );
}

export default DividendsView;