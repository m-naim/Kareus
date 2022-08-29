import {React,useState,useLayoutEffect} from 'react';
import { useParams } from 'react-router-dom';
import portfolioService from '../../services/portfolioService'

function StatisticsView(props) {
    const {id} = useParams();
    const [portfolio, setPortfolio] = useState();

    const fetchData = async () => {
        try{
            const data = await portfolioService.getMetrics(id);
            console.log(data);
            setPortfolio(data);
        }
        catch{
            console.log("error api");
            setPortfolio();
        }
    };

    useLayoutEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
           
        </div>
    );
}

export default StatisticsView;