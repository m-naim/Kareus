import React from 'react';
import { Link } from 'react-router-dom';

function PftRow({pft}) {
    return (
        <Link to={`/Portfolios/${pft.name}`} className='flex items-center w-full place-content-between border px-12 py-4 m-4 rounded-3xl hover:bg-gray-50 hover:cursor-pointer'>
        <p>{pft.name}</p>
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
    );
}

export default PftRow;