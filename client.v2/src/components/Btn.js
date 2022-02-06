import React from 'react';

function Btn({children,...props}) {
    return (
        <button className='bg-sky-700 hover:bg-sky-900 text-white font-bold 
        py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>{children}</button>
    );
}

export default Btn;