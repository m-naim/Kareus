import React from 'react';
import { Link } from 'react-router-dom';
import { round10 } from '../../utils/decimalAjustement';

function PftRow({pft}) {
    return (
        <Link to={`/Portfolios/${pft.name}`} className='grid grid-cols-4 w-full place-content-between border px-12 my-1 py-2 rounded-xl hover:bg-gray-50 hover:cursor-pointer'>
        <p>{pft.name}</p>
        <p>{round10(pft.total_value,-2)}€</p>
        <p className='text-green-500'>{round10(pft.perf*100,-2)}%</p>
        <p>{pft.assetsNbr}</p>
    </Link>
    );
}

export default PftRow;