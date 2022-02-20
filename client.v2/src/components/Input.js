import React from 'react';

function Input({type,name,className,placeholder,value,onChange,id,list}) {
    return (
        <input 
        list={list}
        type={type} name={name} id={id} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " 
        placeholder={placeholder} 
        onChange= {onChange}
        value={value}
        />

    );
}

export default Input;