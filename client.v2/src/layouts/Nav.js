import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import CustomLink from '../components/CustomLink';

function Nav(props) {
    return (
        <nav className='px-6 box-border flex place-content-between items-center shadow-md overflow-hidden'>
            <div className='p-4 flex gap-4'>
                <button className='visible md:hidden'>menu</button>
                <Link className='text-3xl font-large font-bold text-sky-700 hover:text-sky-900' to="/">Karius</Link>
            </div>
            
            <div className='justify-center items-center gap-10 hidden md:flex'>
                <CustomLink  to="/portfolios">Portfolios</CustomLink>
                <CustomLink  to="/predictions">IA Predictions</CustomLink>
                <CustomLink  to="/watchLists">WatchLists</CustomLink>   
            </div>
            <Btn >
                <Link to="/login">login</Link>
            </Btn>
        </nav>
    );
}

export default Nav;