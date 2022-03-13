import React from 'react';
import {Outlet, useParams } from 'react-router-dom';
import DeepLink from '../../components/DeepLink';

function PortfolioView({ children, to, ...props }) {
    const {name} = useParams();
    
    return (
        <div className=' flex flex-col mx-5 md:mx-10 '>
            <div className='flex flex-rows place-content-between '>
                <div className='flex flex-col self-start items-start px-1 py-2'>
                    <p className='text-lg'>{name}</p>
                    <div className='flex flex-rows gap-4'>
                        <p className='text-3xl text-gray-900 '>10000€</p>
                        <p className='text-xl text-green-900 bg-green-200 rounded-md px-2 py-1'> +4.3%</p> 
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>supprimer</button>
                    <button className='shadow-md text-gray-500  hover:bg-gray-100 text-white py-1 px-4 rounded-xl border focus:outline-none focus:shadow-outline'>Partager</button>
                </div>
            </div>
            <div className='flex w-full py-2 pl-20 gap-5 justify-center border-b-2 border-gray-300 overflow-auto'>
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