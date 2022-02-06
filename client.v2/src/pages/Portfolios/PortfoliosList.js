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
            <section className='flex w-2/3 p-2 m-2 items-start'>
                <p className='text-2xl justify-start text-sky-700'>Portfolios</p>
            </section>
            <div className='flex w-2/3 flex-col'>
                {pftArray.map(pft=><PftRow pft={pft}/> )}
            </div>
        </div>
    );
}

export default PortfoliosList;