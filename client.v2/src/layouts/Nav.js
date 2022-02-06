import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../components/Btn';
import CustomLink from '../components/CustomLink';

function Nav(props) {
    return (
        <nav className='box-border p-4 border-1 flex place-content-between'>
            <div className='flex justify-center items-center gap-10'>
                <Link className='text-3xl p-1 font-large font-bold text-sky-700 hover:text-sky-900' to="/">Karius</Link>
                <CustomLink  to="/portfolios">Portfolios</CustomLink>
                <CustomLink  to="/predictions">IA Predictions</CustomLink>
                <CustomLink  to="/watchLists">WatchLists</CustomLink>   
            </div>
            <Btn>
            <Link to="/login">login</Link>
            </Btn>
        </nav>
    );
}

export default Nav;