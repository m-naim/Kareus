import React, { useState } from 'react';
import { format } from 'date-fns';
import Selectable from 'components/Selectable';
import MultiSelect from 'components/MultiSelect';
import Autocomplite from 'components/Autocomplite';
import portfolioService from 'services/portfolioService';

function AddTransaction({ hide, addClick, symbol }) {
    const [ticker, setTicker] = useState(symbol);
    const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
    const [qty, setQty] = useState(1);
    const [prix, setPrix] = useState(0);
    const [sense, setSense] = useState("buy");
    

    const fetchData = async () => {
        try{
            const response = await portfolioService.getStocksNameByName(ticker);
            console.log(response);
            return response;
        }
        catch{
            return [];
        }
    };

    return (
        <div className="w-full max-w-xl shadow-xl relative flex gap-6 flex-col  justify-center items-center bg-white py-8 px-12 rounded-md bg-dark ">
            <div class="flex gap-4 flex-col w-full">
                <div className='flex gap-8 items-center justify-between'>
                    <p class="text-xl font-semibold leading-7 lg:leading-9 text-gray-800" >Ajouter une transaction</p>
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
                <MultiSelect active={sense} select={setSense} list={['buy','sell']} />
                <div>
                    <h3 role="main" class="text-lg font-semibold leading-7 lg:leading-9 text-gray-800">Action</h3>
                    <Autocomplite value={ticker} setValue={setTicker} fetchData={fetchData} />
                </div>

                <div>
                    <h3 role="main" class="text-lg font-semibold leading-7 lg:leading-9 text-gray-800">Date</h3>
                    <input className='input-primary' type='date' value={date} onChange={(e) =>{ setDate(e.currentTarget.value);}} />
                </div>
                <div>
                    <h3 role="main" class="text-lg font-semibold leading-7 lg:leading-9 text-gray-800">Prix</h3>
                    <input className='input-primary' type='number' step={0.01} value={prix} onChange={(e) => setPrix(e.currentTarget.value)} />
                </div>
                <div>
                    <h3 role="main" class="text-lg font-semibold leading-7 lg:leading-9 text-gray-800">Quantité</h3>
                    <input className='input-primary' type='number' value={qty} onChange={(e) => setQty(e.currentTarget.value)} />
                </div>
                <button className='btn-primary  w-full' 
                    onClick={
                    () => {
                        addClick(sense,ticker,prix,qty,date);
                        hide();
                    }
                } >Ajouter</button>
            </div>
        </div>
    );
}

export default AddTransaction;