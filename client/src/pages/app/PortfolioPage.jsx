import React, { useLayoutEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import Orders from './Orders';
import axios from 'axios';
import AllocationPie from './AllocationPie';
import Performance from './Performance';
import config from '../../config.js';

const API_URL = config.API_URL+'/api/v1/portfolio'
function PortfolioPage(props) {
    const [view, setView]= useState('p')
    const [portfolio, setPortfolio] = useState({allocation:[],transactions:[]});

    const togleView= ()=>{
        if(view==='p') return <PortfolioList rows={portfolio.allocation}/>
        if(view==='o') return <Orders rows={portfolio.transactions} />
        if(view==='r') return <Performance/>
        if(view==='pie') return <AllocationPie adata={portfolio.allocation}/>
        return <div>Error</div>
    }

    const fetchData = async () => {
        const { data } = await axios.get(API_URL);
        data.allocation.forEach((item, i) => {
            item.id = i + 1;
        });
        data.transactions.forEach((item, i) => {
            item.id = i + 1;
        });
        setPortfolio(data);
    };

    useLayoutEffect(() => {
        fetchData();
    },[]);

    return (
        <div style={{display: 'flex',flexDirection:'column',justifyContent: 'space-evenly',padding:'5px'}}>
            <div>
                <div style={{display: 'flex',justifyContent: 'space-evenly'}}>
                    <p onClick={()=>setView('p')}>Allocation</p>
                    <p onClick={()=>setView('o')}>Orders</p>
                    <p onClick={()=>setView('r')}>Preformance</p>
                    <p onClick={()=>setView('pie')}>Pies</p>
                </div>
                <div style={{display:'flex', flexDirection: "column", alignItems:'center'}} >
                    { togleView()}
                </div>
            </div>
            <div style={{display: 'flex',flexDirection:'column',
                alignItems:'center', justifyContent: 'space-evenly'}}>
               
            </div>
        </div>
    );
}

export default PortfolioPage;