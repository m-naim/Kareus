import React from 'react';
import watchList from '../../mock/watchList';
import Btn from '../../components/Btn'

function WatchedStocksTable({ selectStock,rows = watchList.rows, columns = watchList.columns }) {
    return (
        <div className='w-full'>
            <div className='flex place-content-between py-4'>
                <p className='text-lg'>{rows.length} éléments</p>
                <div className='flex gap-8'>
                    <button className='text-sky-500 hover:text-white hover:bg-sky-600 text-white font-bold py-1 px-8 rounded-full focus:outline-none focus:shadow-outline'>Trier</button>
                    <Btn>+ Ajouter</Btn>
                </div>
            </div>
            <table class="table-auto w-full">
                <thead>
                    <tr className="border-collapse border-b border-gray-200 ">
                        {columns.map(c => <th class="text-left text-gray-600" >{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(r =>
                        <tr onClick={()=>selectStock(r['CODE'])} className="border-collapse border-b border-gray-200 ">
                            {columns.map(c => <td className='py-4'>{r[c]}</td>)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default WatchedStocksTable;