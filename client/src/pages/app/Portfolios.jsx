import React, { useLayoutEffect, useState } from 'react';
import AppNav from '../../components/AppNav';
import portfolioService from '../../services/portfolioService';
import PortfolioPage from './PortfolioPage';

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
        <div>
            <AppNav />
            <div>
                {pftArray.map(pft => 
                    <div onClick={()=>{setSelectedPft(pft.name)}}>{pft.name}</div>
                )}
            </div>
            <div>
                {selectedPft!==""?<PortfolioPage name={selectedPft}/>:<></>}
            </div>
        </div>
    );
}

export default Portfolios;