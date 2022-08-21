import React from 'react';
import './index.css'
import crypto1 from 'assets/img/crypto.btc.svg'
import crypto2 from 'assets/img/crypto.eth.svg'

import stats from 'assets/img/stats.jpg'

function Home(props) {
    return (
        <div className='h-full bg-dark'>

            <header className="flex place-content-center w-screen gap-0 flex-col md:flex-row-reverse overflow-hidden">

                <div className='crypto-block w-full md:w-[20rem] h-60 ' >
                    <div class="crypto-wrap-1 animate-bounce" >
                        <img src={crypto1} data-src={crypto1} alt="crypto" class="lazy lazyLoaded" data-load-priority="0" />
                    </div>
                    <div class="crypto-wrap-2 animate-bounce" >
                        <img src={crypto2} data-src={crypto2} alt="crypto" class="lazy lazyLoaded" data-load-priority="0" />
                    </div>

                    <div class="crypto-wrap-3 animate-bounce" >
                        <img src={crypto2} data-src={crypto2} alt="crypto" class="lazy lazyLoaded" data-load-priority="0" />
                    </div>
                    <div class="crypto-wrap-4 animate-bounce" >
                        <img src={crypto1} data-src={crypto1} alt="crypto" class="lazy lazyLoaded" data-load-priority="0" />
                    </div>
                </div>


                <div class="flex flex-col p-8 place-items-center bg-gray-100/70 md:w-3/5 rounded m-8 md:bg-transparent">
                    <div className='w-full'>

                        <h1 class="flex flex-col place-content-center text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate text-gray-900 ">
                            <span class="block ">L'application pour</span>

                            <span class="block text-sky-600 "> suivre et Partager </span>
                            <span class="block ">vos Portefeuils</span>
                        </h1>

                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">S'inspirer des portfeils publics deviens plus facile</p>
                    </div>

                    <div class="mt-8 w-full">
                        <h5 class="mt-18 text-left text-gray-900 md:mt-10 md:text-md md:max-w-xl md:mt-5 md:text-lg lg:mx-0">
                            S'inscrire pour être notifié quand la bêta serais disponible</h5>
                        <div class="max-w-xl w-full mt-4 md:flex justfy-center ">
                            <input className='input-primary' type="mail" name='mail' placeholder='Exemple@mail.com' />
                            <div class="mt-3 md:mt-0 md:ml-3">
                                <a href="#" class="break-normal w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"> S'inscrire</a>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <section className='w-full p-6 bg-gray-100 dark:bg-gray-700'>
                <h1 className='text-center'> Rejoinez la communauté</h1>
                <div className='flex justify-evenly p-6'>
                    <div className='flex flex-col'>
                        <h3>Utilisateurs</h3>
                        <h3 className='text-center'>100</h3>
                    </div>

                    <div>
                        <h3>Portefeuilles Crées</h3>
                        <h3 className='text-center'>100</h3>
                    </div>
                </div>
            </section>
            <section className='w-full p-8 bg-dark'>
                    <div className='flex flex-wrap justify-center -m-4'>
                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Tracker votre portfolio</h4>
                            </div>
                            <p className='text-md text-gray-600'>Suivrez vos performances</p>
                            <p className='text-md text-gray-600'>Comparer vos performances les indices et les autres portfeilles</p>
                        </div>
                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Inspirez vous</h4>
                            </div>
                            <p className='text-md text-gray-600'>Recherche simple de portfeilles</p>
                            <p className='text-md text-gray-600'>Plein de statistiques sur les portfeilles</p>
                        </div>
                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Partagez</h4>
                            </div>
                            <p className='text-md text-gray-600'>Partager vous portfeilles avec vos amis et la communauté</p>
                            <p className='text-md text-gray-600'>Comparer les performances et autres statistiques</p>
                        </div>
                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Saisie facile</h4>
                            </div>
                            <p className='text-md text-gray-600'>import votre portfeuille a partir d'un fichier excel</p>
                        </div>
                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Alertes intelligentes</h4>
                            </div>
                            <p className='text-md text-gray-600'>Soyez informés en temps réel des transactions des portfeulles que vos Suivez</p>
                            <p className='text-md text-gray-600'>Notifications programmées</p>
                        </div>

                        <div className='shadow-md p-6 bg-white md:w-1/4 w-full m-4 bg-dark'>
                            <div className='flex gap-4 content-center items-center'>
                                <div className='w-12 h-12 bg-sky-500 rounded-md'>i</div>
                                <h4 className='mb'>Alertes intelligentes</h4>
                            </div>
                            <p className='text-md text-gray-600'>Soyez informés en temps réel des transactions des portfeulles que vos Suivez</p>
                            <p className='text-md text-gray-600'>Notifications programmées</p>
                        </div>
                </div>
            </section>
            <section className='w-full flex flex-col md:flex-row p-8 gap-5'>
                {/* <img className='shadow-md' src={stats} alt="stats" /> */}

            </section>

        </div>
    );
}

export default Home;