import {React} from 'react';
import Input from './Input';

function Autocomplite({value,setValue,options,fetchData}) {
   
    return (
        <div className="flex flex-col items-center">
            <Input list="auto" id="choice" name="choice" value={value} onChange={
                (e)=> {
                    setValue(e.currentTarget.value); 
                    fetchData();
                }
            }/>
            
            <datalist id="auto">
                {options.map(op=><option value={op}/>)}
            </datalist>

        </div>
    );
}

export default Autocomplite;