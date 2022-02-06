import React from 'react';
import data from '../mock/data';
import Btn from './Btn';


function Table({rows=data.rows,columns=data.columns}) {
    return (
        <div>
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
                    <th></th>
                    {columns.map(c =><th class="text-left text-gray-600" >{c}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map(r =>
                    <tr className="border-collapse border-b border-gray-200 ">
                        <td className='flex py-4 gap-2'>
                            <button className='align-baselin bg-green-500 hover:bg-green-600  text-center text-white font-bold w-8 h-8 rounded-md focus:outline-none focus:shadow-outline'>+</button>
                            <button className='align-baselin bg-red-500 hover:bg-red-600 text-center text-white font-bold w-8 h-8 rounded-md focus:outline-none focus:shadow-outline'>-</button>
                        </td>
                        {columns.map(c =><td className='py-4'>{r[c]}</td>)}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
}

export default Table;