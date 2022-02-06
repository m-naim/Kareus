import React from 'react';
import logo from '../../logo.svg';
function Home(props) {
    return (
        <header className="ld:p-40 p-8 flex w-full flex-col gap-8 justify-center items-center">
            <p className='text-4xl text-sky-900' >
            Suivez votre portfolio Avec Karius
            </p>
            <a
            className="text-4xl"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
      </header>
    );
}

export default Home;