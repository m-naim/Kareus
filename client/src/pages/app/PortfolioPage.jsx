import React, { useLayoutEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import Orders from './Orders';
import axios from 'axios';
import AllocationPie from './AllocationPie';
import Performance from './Performance';
import config from '../../config.js';
import portfolioService from '../../services/portfolioService';

import {
     Link, Switch,useParams
  } from 'react-router-dom';
import PrivateRoute from '../../routes/privateRoute';
import { Typography } from '@material-ui/core';


const API_URL = config.API_URL+'/api/v1/portfolio'
function PortfolioPage(props) {
    const [portfolio, setPortfolio] = useState({allocation:[],transactions:[]});
    let {name}= useParams();

    const fetchData = async () => {
        try{
            const data = await portfolioService.get(name);
            data.allocation.forEach((item, i) => {
                item.id = i + 1;
            });

            data.transactions.forEach((item, i) => {
                item.id = i + 1;
            });
            setPortfolio(data);
        }
        catch{
            console.log("error api");
            setPortfolio({allocation:[],transactions:[]});
        }
    };

    useLayoutEffect(() => {
        fetchData();
    },[]);

    return (
        <div style={{display: 'flex',flexDirection:'column',justifyContent: 'space-evenly',padding:'5px'}}>
            <div className='centered-container'>
                <Typography variant="h3" >{name}</Typography>
                <div className='container-space-btwn' style={{justifyContent: 'space-evenly'}}>
                    <Link to={`/app/portfolios/${name}/Allocation`}>Allocation</Link>
                    <Link to={`/app/portfolios/${name}/Preformance`}>Preformance</Link>
                    <Link to={`/app/portfolios/${name}/Pies`}>Pies</Link>
                    <Link to={`/app/portfolios/${name}/Orders`}>Orders</Link>
                </div>
                <div style={{display:'flex', flexDirection: "column", alignItems:'center'}} >
                <Switch>
                    <PrivateRoute exact path="/app/portfolios/:name"><PortfolioList rows={portfolio.allocation}/></PrivateRoute>
                    <PrivateRoute path="/app/portfolios/:name/Allocation"><PortfolioList rows={portfolio.allocation}/></PrivateRoute>
                    <PrivateRoute path="/app/portfolios/:name/Pies"><AllocationPie/><AllocationPie adata={portfolio.allocation}/></PrivateRoute>
                    <PrivateRoute path="/app/portfolios/:name/Orders"><Orders rows={portfolio.transactions} /></PrivateRoute>
                    <PrivateRoute path="/app/portfolios/:name/Preformance"><Performance/></PrivateRoute>
                </Switch>
                </div>
            </div>
            <div style={{display: 'flex',flexDirection:'column',
                alignItems:'center', justifyContent: 'space-evenly'}}>
    
            </div>
        </div>
    );
}

export default PortfolioPage;