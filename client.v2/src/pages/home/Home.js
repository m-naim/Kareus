import React from 'react';
import Input from '../../components/Input';
import './index.css'

function Home(props) {
    return (
        <div>

            <header className="flex place-items-scratch w-screen gap-20 lg:flex-row flex-col-reverse overflow-hidden">

                <div class="flex flex-col place-items-center sm:text-center  p-8 sm:w-full lg:w-2/3 lg:p-20 lg:text-left">
                    <div>

                        <h1 class="flex flex-col place-content-center text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-5xl">
                            <span class="block ">Une application pour</span>

                            <span class="block text-sky-600 "> Partager et suivre </span>
                            <span class="block ">vous Portefeuils</span>
                        </h1>

                        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">S'inspirer des portfeils publics deviens plus facile</p>
                    </div>

                    <div class="mt-8">
                        <p class="mt-18 text-left text-gray-900 sm:mt-10 sm:text-md sm:max-w-xl md:mt-5 md:text-lg lg:mx-0">
                            S'inscrire pour être notifié quand la bêta serais disponible</p>
                        <div class="max-w-xl w-full mt-4 sm:flex justfy-center ">
                            <Input type="mail" name='mail' placeholder='Exemple@mail.com' />
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#" class="break-normal w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10"> S'inscrire</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' sm:w-full lg:w-1/2 img overflow-hidden' >

                </div>


            </header>
        </div>
    );
}

export default Home;