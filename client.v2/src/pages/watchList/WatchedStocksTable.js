import { React, useState,useEffect} from 'react';
import watchList from '../../mock/watchList';
import Autocomplite from '../../components/Autocomplite';
import portfolioService from '../../services/portfolioService';
import watchListService from '../../services/watchListService';


function WatchedStocksTable({ selectStock, rows={}  , columns = watchList.columns }) {
    rows.stocks = rows.stocks === undefined?[]:rows.stocks
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [list, setList] = useState([]);

    const fetchData = async () => {
        const response = await portfolioService.getStocksNameByName(value);
        setOptions(response);
    };
    useEffect(() => {setList(rows.stocks)}, [rows])
    const addClick = () => { 
        const newList = [...list, { symbol: value }]
        setList(newList) 
        watchListService.addStock({name:rows.name,stocks:newList});
    }

    const mapSelected=(value)=>{
        if(value.includes('.PA')){
            return 'XPAR:'+value.replace('.PA','');
        }
        return value;
    }
    
    return (
        <div className='w-full'>
            <div className='flex place-content-between py-4'>
                <p className='text-lg'>{rows.length} éléments</p>
                <div className='flex gap-8'>
                    <button className='text-sky-500 hover:text-white hover:bg-sky-600 text-white font-bold py-1 px-8 rounded-full focus:outline-none focus:shadow-outline'>Trier</button>
                    <Autocomplite value={value} setValue={setValue} options={options} fetchData={fetchData} />
                    <button className='btn-primary' onClick={()=>addClick()}>+ Ajouter</button>
                </div>
            </div>
            <table class="table-auto w-full">
                <thead>
                    <tr className="border-collapse border-b border-gray-200 ">
                        {watchList.columns.map(c => <th class="text-left text-gray-600" >{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {list.map(r =>
                        <tr onClick={() => selectStock(r['symbol'])} className="border-collapse border-b border-gray-200 ">
                            {watchList.columns.map(c => <td className='p-1'>{r[c]}</td>)}
                            <td><a href={`https://www.gurufocus.com/term/gf_value/${mapSelected(r['symbol'])}/`} target="_blank" rel="noreferrer" >GF</a></td>
                        </tr>
                    )}
                   
                </tbody>
            </table>
        </div>
    );
}

export default WatchedStocksTable;