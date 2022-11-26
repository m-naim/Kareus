
import PftRow from 'pages/Portfolios/PftRow';
import {React,useState,useLayoutEffect} from 'react';
import portfolioService from '../../services/portfolioService'

function ExplorerView(props) {
    const [pftArray, setPftArray] = useState([]);
    
    const fetchData = async () => {
        const response = await portfolioService.getAll();
        console.log(response);
        setPftArray(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='flex flex-col justify-center items-center bg-dark p-4'>

            <section className='flex w-full lg:w-2/3 m-2 place-content-between'>
                <p className='text-2xl justify-start text-sky-700'>Explorer</p>
            </section>

            <div className='flex w-full lg:w-2/3 flex-col'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-20 w-full place-content-between px-4 rounded-3xl '>
                    <p>Name</p>
                    <p className='hidden md:block text-gray-500'>Value</p>
                    <p className='text-gray-500'>Variation</p>
                    <p className='hidden md:block text-gray-500'>Positions</p>
                </div>
                {pftArray.map(pft=><PftRow pft={pft}/> )}
            </div>
        </div>
    );
}

export default ExplorerView;