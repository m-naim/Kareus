import React, { useLayoutEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import portfolioService from 'services/portfolioService';
import DeepLink from '../../components/DeepLink';
import { round10 } from '../../utils/decimalAjustement';

function PortfolioView({ children, to, ...props }) {
    const { name } = useParams();

    const [pftData, setPftData] = useState([]);
    const fetchData = async () => {
        const response = await portfolioService.getData(name);
        setPftData(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);

    return (
        <div className=' flex flex-col mx-5 md:mx-10 bg-dark '>
            <div className='flex flex-rows place-content-between '>
                <div className='flex flex-col self-start items-start px-1 py-2'>
                    <h3>{name}</h3>
                    <div className='flex flex-rows gap-4'>
                        <h4>{round10(pftData.total_value, -2)}€</h4>
                        {pftData.perf > 0 ?
                            <p className='text-lg text-green-900 bg-green-200 rounded-md px-2 py-1'> {round10(pftData.perf * 100, -2)}%</p>
                            : <p className='text-lg text-red-900 bg-red-200 rounded-md px-2 py-1'> {round10(pftData.perf * 100, -2)}%</p>
                        }
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>suivre</button>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>supprimer</button>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>Partager</button>
                </div>
            </div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-2">
                        <DeepLink to={`/Portfolios/${name}/allocation`}>Valeurs</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${name}/preformance`}>Preformances</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${name}/pies`}>Allocation</DeepLink>
                    </li>
                    <li class="mr-2">
                        <DeepLink to={`/portfolios/${name}/orders`}>Transactions</DeepLink>
                    </li>
                </ul>
            </div>

            <Outlet />

        </div>
    );
}

export default PortfolioView;