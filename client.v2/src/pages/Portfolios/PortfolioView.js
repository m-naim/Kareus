import React, { useLayoutEffect, useState } from 'react';
import {Outlet, useParams } from 'react-router-dom';
import portfolioService from 'services/portfolioService';
import DeepLink from '../../components/DeepLink';
import { round10 } from '../../utils/decimalAjustement';

function PortfolioView({ children, to, ...props }) {
    const {name} = useParams();

    const [pftData, setPftData] = useState([]);
    const fetchData = async () => {
        const response = await portfolioService.getData(name);
        console.log(response);
        setPftData(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=' flex flex-col mx-5 md:mx-10 '>
            <div className='flex flex-rows place-content-between '>
                <div className='flex flex-col self-start items-start px-1 py-2'>
                    <p className='text-3xl'>{name}</p>
                    <div className='flex flex-rows gap-4'>
                        <p className='text-2xl text-gray-500 '>{ round10(pftData.total_value,-2)}€</p>
                        {pftData.perf>0?
                        <p className='text-lg text-green-900 bg-green-200 rounded-md px-2 py-1'> { round10(pftData.perf*100,-2)}%</p> 
                        :<p className='text-lg text-red-900 bg-red-200 rounded-md px-2 py-1'> { round10(pftData.perf*100,-2)}%</p> 
                        }
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>suivre</button>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>supprimer</button>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>Partager</button>
                </div>
            </div>
            <div className='flex w-full py-2 gap-8 border-y border-gray-300 overflow-auto'>
                    <DeepLink to={`/Portfolios/${name}/allocation`}>Allocation</DeepLink>
                    <DeepLink to={`/portfolios/${name}/preformance`}>Preformance</DeepLink>
                    <DeepLink to={`/portfolios/${name}/pies`}>Pies</DeepLink>
                    <DeepLink to={`/portfolios/${name}/orders`}>Orders</DeepLink>
            </div>

            <Outlet />

        </div>
    );
}

export default PortfolioView;