import React from 'react';

function Selectable({children,onClick,selected,...props}) {
    let className="bg-gray-400 hover:bg-gray-500 text-white font-bold h-1py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
    if(selected) className=className+ " border-b-4 border-sky-500"
    return (
        <button 
        onClick={onClick}
        className={className}>{children}</button>
    );
}

export default Selectable;