import {React,useState,useEffect} from 'react';
import Btn from '../../components/Btn';
import Modal from '../../components/Modal';
import Selectable from '../../components/Selectable';
import useModal from '../../hooks/UseModal';
import watchListService from '../../services/watchListService';
import WatchedStocksTable from './WatchedStocksTable';

function WatchListView(props) {
    const [selected, setSelected] = useState('XPAR:TTE');
    const {isShowing, toggle} = useModal();
    const [list, setList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const fetchData = async () => {
        const response = await watchListService.getAll();
        setList(response);
        setSelectedList(response[0]);
    };

    useEffect(() => {
        fetchData();
    },[]);
    const mapSelected=(value)=>{
        if(value.includes('.PA')){
            return 'XPAR:'+value.replace('.PA','');
        }
        return value;
    }
    return (
        <div>
            <div className='flex w-fill flex-row justify-evenly mx-40 p-6'>
                <div className='flex w-fill flex-row gap-5'>
                    {list.map(w=><Selectable selected={selectedList==w} onClick={()=>setSelectedList(w)} >{w.name} </Selectable>)}
                </div>
                <Btn onClick={toggle}>+ Ajoute une Liste</Btn>
                <Modal isShowing={isShowing} hide={()=>toggle()}/>
            </div>

            <div className='flex w-fill flex-row justify-evenly mx-40'>
                    <WatchedStocksTable rows={selectedList}  className='m-3' selectStock={ (stock)=>{ setSelected(stock); }} />
                    <iframe 
                        title='graph'
                        className='shadow-xl m-3'
                        style={{width:750,height:500}}
                        src={`https://www.gurufocus.com/modules/chart/term/gf_value.php?symbol=${mapSelected(selected)}`}
                    />
            </div>
        </div>
    );
}

export default WatchListView;