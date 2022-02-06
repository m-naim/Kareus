import {React,useState,useLayoutEffect} from 'react';
import Table from '../../components/Table';
import { useParams } from 'react-router-dom';
import portfolioService from '../../services/portfolioService'

const columns=['symbol','weight','last','name','qty','bpe'] 
function AllocationView(props) {
    const {name} = useParams();
    const [portfolio, setPortfolio] = useState({allocation:[],transactions:[]});

    const fetchData = async () => {
        console.log(name);
        try{
            const data = await portfolioService.get(name);
            data.allocation= data.allocation.map((item, i) => {
                item.id = i + 1;
                return {...item, ...item.asset}
            });

            data.transactions.forEach((item, i) => {
                item.id = i + 1;
            });
            console.log(data.allocation);
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
        <div>
            <Table columns={columns} rows={portfolio.allocation}/>
        </div>
    );
}

export default AllocationView;