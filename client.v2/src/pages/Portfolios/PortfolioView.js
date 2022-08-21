import React, { useLayoutEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import authService from 'services/authService';
import portfolioService from 'services/portfolioService';
import DeepLink from '../../components/DeepLink';
import { round10 } from '../../utils/decimalAjustement';

function PortfolioView({ children, to, ...props }) {
    const { id } = useParams();
    const [followed, setFollowed] = useState(false);
    const [editable, setEditable] = useState(false);
    const [pftData, setPftData] = useState([]);

    const fetchData = async () => {
        const response = await portfolioService.getData(id);
        const userId= authService.getCurrentUser().user.id;
        if(response.followers.includes(userId)) setFollowed(true);
        if(response.owner===userId) setEditable(true);
        setPftData(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);

    const follow= async ()=>{
        try{
            setFollowed(!followed);
            await portfolioService.follow(id);
        }
        catch{
            console.log("error");
        }
    }

    const deletePortfolio= async ()=>{
        try{
            await portfolioService.deletePortfolio(id);
        }
        catch{
            console.log("error");
        }
    }

    return (
        <div className=' flex flex-col mx-5 md:mx-10 bg-dark '>
            <div className='flex flex-rows place-content-between '>
                <div className='flex flex-col self-start items-start px-1 py-2'>
                    <h3>{pftData.name}</h3>
                    <div className='flex flex-rows gap-4'>
                        <h4>{round10(pftData.total_value, -2)}€</h4>
                        {pftData.perf > 0 ?
                            <p className='text-lg text-green-900 bg-green-200 rounded-md px-2 py-1'> {round10(pftData.perf * 100, -2)}%</p>
                            : <p className='text-lg text-red-900 bg-red-200 rounded-md px-2 py-1'> {round10(pftData.perf * 100, -2)}%</p>
                        }
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <button onClick={follow} className={'flex items-center shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'+(followed?' text-amber-300':'')}>
                        <svg viewBox="0 0 1000 1000" width="1rem" height="1rem"  aria-hidden="true">
                            <path
                                fill="currentColor"
                                d="M10,394.5c0-14.8,10.9-23.9,32.7-27.4l295.4-42.2L471,56.9c7.7-16.2,17.2-24.3,28.5-24.3s21.1,8.1,29.5,24.3l131.9,267.9l295.4,42.2c22.5,3.5,33.8,12.7,33.8,27.4c0,8.4-5.3,17.9-15.8,28.5L760,630.8l50.6,294.3c0.7,2.8,1.1,7,1.1,12.7c0,7.7-2.1,14.4-6.3,20c-4.2,5.6-10.2,8.8-17.9,9.5c-7,0-14.8-2.5-23.2-7.4L499.5,820.7L235.7,959.9c-9.1,4.9-17.2,7.4-24.3,7.4c-7.7,0-13.7-3.2-17.9-9.5c-4.2-6.3-6.3-13-6.3-20c0-2.8,0.4-7,1.1-12.7l50.6-294.3L24.8,423C14.9,412.4,10,402.9,10,394.5L10,394.5z"
                                />
                        </svg>
                        <span className='text-base font-medium ml-1 dark:text-gray-300'>{followed?'Suivis':'Suivre'}</span> 
                    </button>
                    
                    {editable &&
                        <button onClick={deletePortfolio} className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>Supprimer</button>
                    }
                    {/* <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>Partager</button> */}
                </div>
            </div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-slate-600">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <DeepLink to={`/Portfolios/${id}/allocation`}>Valeurs</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${id}/preformance`}>Preformances</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${id}/pies`}>Allocation</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${id}/orders`}>Transactions</DeepLink>
                    </li>
                </ul>
            </div>

            <Outlet />

        </div>
    );
}

export default PortfolioView;