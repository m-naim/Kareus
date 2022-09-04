import {React,useState,useLayoutEffect} from 'react';
import Table from '../../components/Table';
import { useParams } from 'react-router-dom';
import portfolioService from '../../services/portfolioService'
import authService from 'services/authService';

const columns=['symbol','weight','qty','last','bpe'] 
function AllocationView(props) {
    const {id} = useParams();
    const [portfolio, setPortfolio] = useState({allocation:[],transactions:[]});
    const [editable, setEditable] = useState(false);

    const fetchData = async () => {
        try{
            const data = await portfolioService.get(id);
            const userId= authService.getCurrentUser().user.id;

            data.allocation= data.allocation.map((item, i) => {
                item.id = i + 1;
                return item;
            });

            data.transactions.forEach((item, i) => {
                item.id = i + 1;
            });
            if(data.owner===userId) setEditable(true);
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
            <Table columns={columns} editable={editable} rows={portfolio.allocation} addtransaction={addtransaction}/>
        </div>
    );
}

export default AllocationView;