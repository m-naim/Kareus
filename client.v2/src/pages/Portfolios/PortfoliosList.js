import {React,useState,useLayoutEffect} from 'react';
import portfolioService from '../../services/portfolioService'
import PftRow from './PftRow';

function PortfoliosList(props) {
    const [pftArray, setPftArray] = useState([]);
    const fetchData = async () => {
        const response = await portfolioService.getAll();
        setPftArray(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <section className='flex w-2/3 p-2 m-2 place-content-between'>
                <p className='text-2xl justify-start text-sky-700'>Portfolios</p>
                <button className='btn-primary' >+ Ajouter</button>
            </section>
            <div className='flex w-2/3 flex-col'>
                <div className='grid grid-cols-4 w-full place-content-between px-12 rounded-3xl hover:bg-gray-50 '>
                    <p>Name</p>
                    <p className='text-gray-500'>Value</p>
                    <p className='text-gray-500'>Variation</p>
                    <p className='text-gray-500'>Positions</p>
                </div>
                {pftArray.map(pft=><PftRow pft={pft}/> )}
            </div>
        </div>
    );
}

export default PortfoliosList;