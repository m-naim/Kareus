import {React,useState,useEffect} from 'react';
import Modal from '../../components/Modal';
import Selectable from '../../components/Selectable';
import useModal from '../../hooks/UseModal';
import watchListService from '../../services/watchListService';
import AddWatchlist from './AddWatchlist';
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
   
    return (
        <div className='w-full overflow-auto bg-dark' >
            <div className='h-32  flex flex-row justify-evenly gap-4 p-4 overflow-x-auto'>
                <div className='flex flex-row gap-4 overflow-x-auto -mx-4 p-4'>
                    {list.map(w=><Selectable selected={selectedList==w} onClick={()=>setSelectedList(w)} >{w.name} </Selectable>)}
                    <button className='btn-primary w-48 whitespace-nowrap' onClick={toggle}>+ Ajoute une Liste</button>
                </div>       
            </div>

            <Modal isShowing={isShowing} hide={()=>toggle()}>
                    <AddWatchlist hide={()=>toggle()} />
            </Modal>

            <div className='flex flex-col-reverse  w-fill md:flex-row justify-evenly p-6 gap-10'>
                    <WatchedStocksTable rows={selectedList}  className='m-3' selectStock={ (stock)=>{ setSelected(stock); }} />
            </div>
        </div>
    );
}

export default WatchListView;