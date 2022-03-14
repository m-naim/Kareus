import React from 'react';
import data from '../mock/data';
import { round10 } from '../utils/decimalAjustement';


function Table({rows=data.rows,columns=data.columns}) {
    const toPrecentille= (val)=> round10(val*100,-2)+'%'
    return (
        <div >
           <div className='flex place-content-between py-4'>
                <p className='text-lg'>{rows.length} éléments</p>
                <div className='flex gap-8'>
                    <button className='text-sky-500 hover:text-white hover:bg-sky-600 text-white font-bold py-1 px-8 rounded-full focus:outline-none focus:shadow-outline'>Trier</button>
                    <button className='btn-primary' >+ Ajouter</button>
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
                        <td >
                            <div className='flex p-2 gap-2'> 
                                <button className='align-baselin bg-green-500 hover:bg-green-600  text-center text-white font-bold w-8 h-8 rounded-md focus:outline-none focus:shadow-outline'>+</button>
                                <button className='align-baselin bg-red-500 hover:bg-red-600 text-center text-white font-bold w-8 h-8 rounded-md focus:outline-none focus:shadow-outline'>-</button>
                            </div>
                        </td>
                        <td >
                            <div className='flex flex-col'>
                            <p>{r.name}</p>
                            <p className='text-xs align-middle text-blue-500 rounded p-1 w-fit '>{r.symbol}</p>
                            </div>
                        </td>
                        <td className=''>
                            <p className='font-semibold'>{toPrecentille(r.weight)}</p>
                        </td>
                        <td className=''>
                            <p>{r.qty}</p>
                        </td>
                        <td className=''>
                            <p>{ round10(r.value,-2)}</p>
                        </td>
                        <td className=''>
                            <p>{round10(r.bpe,-2)}</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    );
}

export default Table;