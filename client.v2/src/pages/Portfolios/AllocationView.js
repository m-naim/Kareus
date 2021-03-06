import {React,useState,useLayoutEffect} from 'react';
import Table from '../../components/Table';
import { useParams } from 'react-router-dom';
import portfolioService from '../../services/portfolioService'

const columns=['symbol','weight','qty','last','bpe'] 
function AllocationView(props) {
    const {name} = useParams();
    const [portfolio, setPortfolio] = useState({allocation:[],transactions:[]});

    const fetchData = async () => {
        console.log(name);
        try{
            const data = await portfolioService.get(name);

            data.allocation= data.allocation.map((item, i) => {
                item.id = i + 1;
                return item;
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

    const addtransaction= async (sense,ticker,prix,qty,date)=>{
        console.log([sense,prix,ticker,qty,date]);
        const data = await portfolioService.AddTransaction(portfolio._id,sense,ticker,prix,qty,date);
        data.allocation= data.allocation.map((item, i) => {
            item.id = i + 1;
            return item;
        });

        data.transactions.forEach((item, i) => {
            item.id = i + 1;
        });
        
        setPortfolio(data);
    }

    return (
        <div>
            <Table columns={columns} rows={portfolio.allocation} addtransaction={addtransaction}/>
        </div>
    );
}

export default AllocationView;