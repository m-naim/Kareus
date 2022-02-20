import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import watchListService from '../services/watchListService';
import Btn from './Btn';
import Input from './Input';

const Modal = ({ isShowing, hide }) => {
  const [value, setValue] = useState(false);
  const addWatchlist = async () => {
      const response = await watchListService.add(value);
      hide() ;
  };

  return (isShowing ? 
    ReactDOM.createPortal(
    <React.Fragment>
      <div className="relative flex justify-center items-center"/>
      <div className="w-full h-full top-0 fixed sticky-0 bg-slate-400/50 " aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className=" 2xl:container  2xl:mx-auto py-32 px-4 md:px-28 flex justify-center items-center ">
  
          <div className=" md:w-auto shadow-xl relative flex gap-6 flex-col  justify-center items-center bg-white py-12 px-12 rounded-md ">
            {/* <button onClick={hide}  class="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button> */}
  
            <div class="flex gap-4 flex-col ">
              <h1 role="main" class="text-3xl lg:text-2xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">We use cookies</h1>
              <Input type={'text'} value={value} onChange={(e)=> setValue(e.currentTarget.value)} />
            </div>
            <div className='flex flex-row gap-6'>
            <Btn onClick={hide} >Annuler</Btn>
            <Btn onClick={addWatchlist} >Ajouter</Btn> 
  
            </div>
  
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
    ) 
    : null); 
}


export default Modal;