import React from 'react';
import { Link } from 'react-router-dom';

function PortfoliosList(props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <section className='flex w-2/3 p-2 m-2 items-start'>
                <p className='text-2xl justify-start text-sky-700'>Portfolios</p>
            </section>
            <div className='flex w-2/3'>
                <Link to="/Portfolios/Name" className='flex items-center w-full place-content-between border px-12 py-4 m-4 rounded-3xl hover:bg-gray-50 hover:cursor-pointer'>
                    <p>Name</p>
                    <div>
                        <p className='text-gray-500'>Value</p>
                        <p>10000€</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Variation</p>
                        <p className='text-green-500'>4.3%</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>positions</p>
                        <p>10</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default PortfoliosList;