import useModal from 'hooks/UseModal';
import AddTransaction from 'pages/Portfolios/AddTransaction';
import React, { useState } from 'react';
import portfolioService from 'services/portfolioService';
import data from '../mock/data';
import { round10 } from '../utils/decimalAjustement';
import Modal from './Modal';

const toPrecentille = (val) => round10(val * 100, -2) + '%';

function Table({ rows = data.rows, columns = data.columns, addtransaction, type = 'allocation' }) {
    const { isShowing, toggle } = useModal();
    const [ticker, setTicker] = useState("");

    const addclick = (value) => {
        setTicker(value);
        toggle();
    }



    return (
        <div >
            <div className='flex place-content-between py-4'>
                <p className='text-lg'>{rows.length} éléments</p>
                <div className='flex gap-8'>
                    <button className='text-blue-500 hover:text-white hover:bg-blue-600 text-white font-bold py-1 px-8 rounded-full focus:outline-none focus:shadow-outline'>Trier</button>
                    <button className='btn-primary' onClick={toggle} >+ Ajouter</button>
                </div>
                <Modal isShowing={isShowing} hide={() => toggle()}>
                    <AddTransaction hide={toggle} addClick={addtransaction} symbol={ticker} />
                </Modal>
            </div>
            <table class="table-auto w-full">
                <thead>
                    <tr className="border-collapse border-b border-gray-200 ">
                        <th></th>
                        {columns.map(c => <th class="text-left text-gray-600 dark:text-gray-300" >{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map(r => type==='allocation'?AllocationLine(r,addclick):TransactionLine(r,addclick)) }
                </tbody>
            </table>
        </div>
    );
}

const AllocationLine = (r,addclick) => {
    return (<tr className="border-collapse border-b border-gray-200 ">
        <td >
            <button type="button"
                onClick={() => addclick(r.symbol)}
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Add transaction</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
            </button>
        </td>
        <td >
            <div className='flex flex-col'>
                <p>{r.asset.name}</p>
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
            <p>{round10(r.asset.last, -2)}</p>
        </td>
        <td className=''>
            <p>{round10(r.bep, -2)}</p>
        </td>
    </tr>);
}

const TransactionLine=(r,addclick)=>{
    return(
        <tr className="border-collapse border-b border-gray-200 ">
        <td >
            <button type="button"
                onClick={() => addclick(r.symbol)}
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Add transaction</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
            </button>
        </td>
        <td >
            <div className='flex flex-col'>
                <p>{r.symbol}</p>
                <p className='text-xs align-middle text-blue-500 rounded p-1 w-fit '>{r.symbol}</p>
            </div>
        </td>
        <td className=''>
            <p className='font-semibold'>{r.date}</p>
        </td>
        <td className=''>
            <p>{r.qty}</p>
        </td>
        <td className=''>
            <p>{r.price}</p>
        </td>
 
    </tr>

    );
}

export default Table;