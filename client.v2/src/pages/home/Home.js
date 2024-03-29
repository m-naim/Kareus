import React from 'react';
import './index.css'
import crypto1 from 'assets/img/crypto.btc.svg'
import crypto2 from 'assets/img/crypto.eth.svg'
import google from 'assets/img/google.svg'
import processor from 'assets/img/processor.png'

import stats from 'assets/img/stats.jpg'
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className='h-full bg-dark'>

            <header className="flex place-items-center justify-around w-screen gap-0 flex-col md:flex-row-reverse overflow-hidden">

                <div className='crypto-block w-full max-w-sm h-80 ' >
                    <div className="crypto-wrap-1 animate-bounce" >
                        <img src={crypto1} data-src={crypto1} alt="crypto" className="lazy lazyLoaded" data-load-priority="0" />
                    </div>
                    <div className="crypto-wrap-2 animate-bounce" >
                        <img src={crypto2} data-src={crypto2} alt="crypto" className="lazy lazyLoaded" data-load-priority="0" />
                    </div>

                    <div className="crypto-wrap-3 animate-bounce" >
                        <img src={crypto2} data-src={crypto2} alt="crypto" className="lazy lazyLoaded" data-load-priority="0" />
                    </div>
                    <div className="crypto-wrap-4 animate-bounce" >
                        <img src={google} data-src={google} alt="crypto" className="lazy lazyLoaded" data-load-priority="0" />
                    </div>

                    <div class="crypto-wrap-5 " >
                        <img src={processor} data-src={processor} alt="crypto" className="lazy lazyLoaded w-60" data-load-priority="0" />
                    </div>
                </div>


                <div class="flex flex-col p-8 my-10 text-center md:text-left  w-full max-w-xl  ">
                    <div className='w-full'>

                        <h1 class="flex flex-col place-content-center text-4xl font-semibold mb-4 aos-init aos-animate  ">
                            <span class="block ">L'application pour</span>
                            <span class="block text-primary "> suivre et partager </span>
                            <span class="block ">vos Portefeuilles</span>
                        </h1>

                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">S'inspirer des portefeuilles publics deviens plus facile</p>
                    </div>

                    <div class="mt-8 w-full">
                            <Link to="/portfolios" >
                                <button className="btn-primary text-xl">Essayer Gratuitement</button>
                            </Link>
                    </div>
                </div>
            </header >

            <section className='w-full p-6 bg-gray-50 dark:bg-slate-700'>
                <p className='text-center text-xl text-primary'> Rejoignez la communauté</p>
                <div className='flex justify-evenly p-6'>
                    <div className='flex flex-col'>
                        <h3 className='text-center text-primary text-5xl'>5</h3>
                        <h5 className='text-lg'>Utilisateurs</h5>
                    </div>

                    <div>
                        <h3 className='text-center text-primary text-5xl'>12</h3>
                        <h5 className='text-lg'>Portefeuilles Crées</h5>
                    </div>
                </div>
            </section>
            <section className='w-full p-8 bg-dark'>
                <div className='flex flex-wrap justify-center -m-4'>
                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 text-primary rounded-md'><img src="https://img.icons8.com/color/48/000000/combo-chart--v2.png"/></div>
                            <h4 className='mb'>Tracker votre portfolio</h4>
                        </div>
                        <p className='text-md text-gray-600'>Suivrez vos performances</p>
                        <p className='text-md text-gray-600'>Comparer vos performances les indices et les autres portefeuilles</p>
                    </div>
                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 rounded-md'><img src="https://img.icons8.com/nolan/96/light.png"/></div>
                            
                            <h4 className='mb'>Inspirez vous</h4>
                        </div>
                        <p className='text-md text-gray-600'>Recherche simple de portefeuilles</p>
                        <p className='text-md text-gray-600'>Plein de statistiques sur les portefeuilles</p>
                    </div>
                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 rounded-md'><img src="https://img.icons8.com/color/48/000000/share--v2.png"/></div>
                            <h4 className='mb'>Partagez</h4>
                        </div>
                        <p className='text-md text-gray-600'>Partager vous portefeuilles avec vos amis et la communauté</p>
                        <p className='text-md text-gray-600'>Comparer les performances et autres statistiques</p>
                    </div>
                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 rounded-md'><img src="https://img.icons8.com/3d-fluency/100/000000/document.png"/></div>
                            <h4 className='mb'>Saisie facile</h4>
                        </div>
                        <p className='text-md text-gray-600'>import votre portefeuille a partir d'un fichier Excel</p>
                    </div>
                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 rounded-md'><img src="https://img.icons8.com/ios-filled/50/228BE6/bell.png"/></div>
                            <h4 className='mb'>Alertes intelligentes</h4>
                        </div>
                        <p className='text-md text-gray-600'>Soyez informés en temps réel des transactions des portefeuilles que vos Suivez</p>
                        <p className='text-md text-gray-600'>Notifications programmées</p>
                    </div>

                    <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark bg-blue-50 dark:bg-slate-700 rounded'>
                        <div className='flex gap-4 content-center items-center'>
                            <div className='w-12 h-12 rounded-md'><img src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-tax-business-nawicon-glyph-nawicon.png"/></div>
                            <h4 className='mb'>Calcule des Impôts </h4>
                        </div>
                        <p className='text-md text-gray-600'>gérer automatiquement le rapport pour Impôts à payer</p>
                    </div>
                </div>
            </section>
            <section className='w-full flex flex-col md:flex-row p-8 gap-5'>
                {/* <img className='shadow-md' src={stats} alt="stats" /> */}

            </section>

        </div >
    );
}

export default Home;