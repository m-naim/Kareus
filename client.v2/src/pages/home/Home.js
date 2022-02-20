import React from 'react';
import Input from '../../components/Input';

function Home(props) {
    return (
        <header className="ld:p-40 p-20 flex w-full gap-20 justify-center items-center flex-row place-content-evenly">
            <div className='w-2/5'>
                <p className='text-5xl text-sky-900 font-bold' >
                    Une application pour suivre et partger vous Portefeuils, et s'inspirer des portfeils publics
                </p>
            </div>
            <div className='flex flex-col gap-14 shadow p-24 bg-sky-900 rounded-md w-1/3'>
                    <p className='text-2xl text-white font-bold'>S'inscrire pour être notifié quand la bêta serais disponible</p>
                    <Input type="mail" name='mail' placeholder='Exemple@mail.com' />
            </div>

      </header>
    );
}

export default Home;