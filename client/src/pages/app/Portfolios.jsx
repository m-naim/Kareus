import React, { useLayoutEffect, useState } from 'react';
import portfolioService from '../../services/portfolioService';
import './index.css'
import { Link } from 'react-router-dom';

function Portfolios(props) {
    const [pftArray, setPftArray] = useState([]);
    const [selectedPft, setSelectedPft] = useState("");
    const fetchData = async () => {
        const response = await portfolioService.getAll();
        setPftArray(response);
    };
    useLayoutEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='centered-container'>
               
            <div className='list-container'>
                {pftArray.map(pft => 
                            <Link className='flex flex-column box-border'  to={`/app/portfolios/${pft.name}`}>
                                <div className=''>{pft.name}</div>
                                <div className=''>
                                    <div className='font-bold '>Valuer</div>
                                    <div>1000€</div>
                                </div>
                                <div className=''>
                                    <div className='' >Variation</div>
                                    <div>+10%</div>
                                </div>
                                <div className=''>
                                    <div className=''>Positions</div>
                                    <div>10</div>
                                </div>
                            </Link>
                )}
            </div>
        </div>
    );
}

export default Portfolios;