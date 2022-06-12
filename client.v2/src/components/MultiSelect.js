import React from 'react';
import Selectable from './Selectable';

function MultiSelect({list,select,active}) {
    return (
        <div className='flex gap-4 w-full bg-gray-200 rounded-md p-2 dark:bg-gray-700'>
            {list.map(item=><Selectable activeClass=' bg-white text-gray-900 dark:bg-slate-400 dark:text-gray-100' classNameP='font-bold rounded-md  p-2 flex-1 text-gray-700 dark:text-gray-500' selected={active===item} onClick={()=>select(item)} >{item} </Selectable>)}
        </div>
    );
}

export default MultiSelect;