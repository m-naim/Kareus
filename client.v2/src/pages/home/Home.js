import React from 'react';
import Btn from '../../components/Btn';
import Input from '../../components/Input';

function Home(props) {
    return (
        <header className="flex w-full p-4 gap-20 justify-center items-center md:flex-row flex-col place-content-evenly ld:p-40 ">
            <div className='md:w-2/5'>
                <p className='text-5xl text-sky-900 font-bold' >
                    Une application pour 
                    <div className='overflow-hidden h-10'>
                        <p className='animate-moveup'>suivre</p>
                        <p className='animate-movedown'>partger</p>
                    </div>
                    vous Portefeuils
                </p>
                <p>
                    et s'inspirer des portfeils publics
                </p>
            </div>
            <div className='flex flex-col gap-4 shadow p-4 bg-sky-900 rounded-md md:w-1/3'>
                    <p className='text-2xl p-6 text-center text-white font-bold'>S'inscrire pour être notifié quand la bêta serais disponible</p>
                    <div className='flex gap-4'>
                        <Input type="mail" name='mail' placeholder='Exemple@mail.com' />
                        <Btn>S'inscrire</Btn>
                    </div>
            </div>

      </header>
    );
}

export default Home;