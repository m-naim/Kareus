import React from 'react';
import { Link } from 'react-router-dom';
import { round10 } from '../../utils/decimalAjustement';

function PftRow({pft}) {
    return (
        <Link to={`/Portfolios/${pft._id}/allocation`} 
        className='grid grid-cols-2 md:grid-cols-4 gap-20 w-full place-content-between border px-4 my-1 py-2 rounded-xl hover:bg-gray-50 hover:cursor-pointer dark:hover:bg-gray-600  dark:border-slate-600'>
            <p className='max-w-xs max-h-16 truncate'>{pft.name}</p>
            <p className='hidden md:block '>{round10(pft.total_value,-2)}€</p>
            <p className='text-green-500'>{round10(pft.perf*100,-2)}%</p>
            <p className='hidden md:block' >{pft.assetsNbr}</p>
        </Link>
    );
}

export default PftRow;