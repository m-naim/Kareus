import React from 'react';

function Btn({children,onClick,...props}) {
    return (
        <button 
        onClick={onClick}
        className='bg-sky-700 hover:bg-sky-900 text-white font-bold h-10
        py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>{children}</button>
    );
}

export default Btn;