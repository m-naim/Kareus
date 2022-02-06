import {React,useState} from 'react';
import WatchedStocksTable from './WatchedStocksTable';

function WatchListView(props) {
    const [selected, setSelected] = useState('XPAR:TTE');
    return (
        <div className='flex w-fill flex-row justify-evenly mx-40'>
                <WatchedStocksTable className='m-3' selectStock={ (stock)=>{ setSelected(stock); }} />
                <iframe 
                    title='graph'
                    className='shadow-xl m-3'
                    style={{width:700,height:500}}
                    src={`https://www.gurufocus.com/modules/chart/term/gf_value.php?symbol=${selected}`}
                />
        </div>
    );
}

export default WatchListView;