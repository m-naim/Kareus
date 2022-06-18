import Toggle from 'components/ThemeToggle';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../components/CustomLink';



function Nav(props) {
    const [popover, setPopover] = useState(false);

    const close = () => setPopover(false);
    return (
        <nav className='px-6 box-border flex place-content-between items-center shadow-md overflow-hidden dark:bg-gray-700'>
            <div className='flex lg:px-14'>

                <div className='p-4 flex gap-4'>
                    <Link className='text-3xl font-large font-bold text-sky-600 hover:text-sky-900 dark:text-slate-100' to="/">Karius<span className='text-sm text-sky-900 font-bold dark:text-slate-100'>.démo</span></Link>
                </div>

                <div className='flex gap-4 justify-center items-center hidden md:flex'>
                    <CustomLink to="/explore">
                        <svg class="mr-2 w-8 h-8 text-blue-700 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Explorer
                    </CustomLink>
                    <CustomLink to="/portfolios">Mes Portefeuils/Suivis</CustomLink>
                    {/* <CustomLink to="/predictions">IA Predictions</CustomLink> */}
                    <CustomLink to="/watchLists">WatchLists</CustomLink>
                </div>
            </div>
            <div className='inline-flex'>
                <Toggle/>
                <Link className='btn-primary h-fit hidden md:block lg:mx-10' to="/login">login</Link>
                <div class="-mr-2 flex items-center md:hidden">
                    <button type="button"
                        onClick={() => setPopover(true)}
                        class="bg-dark bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

            </div>

            {popover ?
                <div onClick={close} class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div class="bg-dark rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div class="px-5 pt-4 flex items-center justify-between">
                            <Link className='text-3xl font-large font-bold text-sky-600 hover:text-sky-900' to="/">Karius</Link>
                            <div class="-mr-2">
                                <button type="button"
                                    onClick={close}
                                    class="bg-dark rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span class="sr-only">Close main menu</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="px-2 pt-2 pb-3 space-y-1 bg-dark">

                            <Link to="/explore" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Portfolios</Link>

                            <Link to="/portfolios" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Mes Portefeuils/Suivis</Link>

                            <Link to="/watchLists" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">WatchLists</Link>

                        </div>
                        <Link to="/login" class="block w-full px-5 py-3 text-center font-medium text-sky-600 bg-gray-50 hover:bg-gray-100"> Log in </Link>
                    </div>
                </div>
                : null}
        </nav>
    );
}

export default Nav;