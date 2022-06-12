import Modal from 'components/Modal';
import useModal from 'hooks/UseModal';
import {React,useState,useLayoutEffect} from 'react';
import portfolioService from '../../services/portfolioService'
import AddPortfolio from './AddPortfolio';
import PftRow from './PftRow';

function PortfoliosList(props) {
    const [pftArray, setPftArray] = useState([]);
    const {isShowing, toggle} = useModal();
    
    const fetchData = async () => {
        const response = await portfolioService.getAll();
        setPftArray(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);

    const addClick =async (name) => {  
        if(name==="") return
        try{
            await portfolioService.add(name);
            fetchData();
            toggle();
        }
        catch{
            console.log("error");
        }
    }

    return (
        <div className='flex flex-col justify-center items-center bg-dark'>

            <div className="w-full w-2/3 p-2 m-2  text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                <ul class="flex flex-wrap -mb-px">
                    <li class="mr-4 text-xl">
                        Mes portfeuilles
                    </li>
                    <li class="mr-4 text-xl">
                        Portfeuilles Suivis
                    </li>
                </ul>
            </div>

            <section className='flex w-2/3 p-2 m-2 place-content-between'>
                <p className='text-2xl justify-start text-sky-700'>Portfolios</p>
                <button className='btn-primary w-32' onClick={toggle}>+ Ajouter</button>
            </section>
                <Modal isShowing={isShowing} hide={()=>toggle()}>
                    <AddPortfolio hide={()=>toggle()} addClick={addClick}/>
                </Modal>
            <div className='flex w-2/3 flex-col'>
                <div className='grid grid-cols-4 w-full place-content-between px-12 rounded-3xl '>
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