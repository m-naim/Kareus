import React from 'react';
import { useState } from 'react';
import watchListService from 'services/watchListService';

function AddWatchlist({ hide }) {
    const [value, setValue] = useState("");


    const addWatchlist = async () => {
        const response = await watchListService.add(value);
        hide();
    };
    return (
        <div className=" md:w-auto shadow-xl relative flex gap-6 flex-col  justify-center items-center bg-white py-12 px-12 rounded-md bg-dark">
            <div className='flex gap-8 items-center justify-between'>
                <p class="text-xl font-semibold leading-7 lg:leading-9 text-gray-800" >Creer une watch liste</p>
                <div class="-mr-2">
                    <button type="button"
                        onClick={hide}
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close pop-up</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>

            <div class="flex gap-1 flex-col w-full ">
                <h1 role="main" class="text-lg font-semibold leading-7 lg:leading-9 text-gray-800">Nom de la watch liste</h1>
                <input className='input-primary' type={'text'} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            </div>
            <button className='btn-primary w-full' onClick={addWatchlist} >Ajouter</button>
        </div>
    );
}

export default AddWatchlist;