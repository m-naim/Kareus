import { format } from 'date-fns/esm'
import React, { useEffect, useState } from 'react'
import stockService from 'services/stock.service'
import { isDefined } from 'utils/utils'

export default function StocksList() {

    const[stocks,setStocks]=useState([])
    const[sens,setSens]=useState(1)

    const fetchData= async()=>{
        const data= await stockService.getAll()
        setStocks(data)
        console.log(data);
    }

   
    const sortBy= async()=>{
        setSens(sens*(-1));
        console.log(sens);
        const data= [...stocks].sort((a, b) => {
            if(!isDefined(a.last_update)) return -1*sens;
            if(!isDefined(b.last_update)) return 1*sens;
            let da = new Date(a.last_update),
                db = new Date(b.last_update);
            
            return (da - db)*sens;
        })
        setStocks(data)
        
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <div>

        </div>
        <div className='max-w-6xl m-12'>
            <table class="table-auto w-full">
                <thead>
                    <tr className="border-collapse border-b border-gray-200 ">
                        <th class="text-left text-gray-600 dark:text-gray-300"  >symbol</th>
                        <th class="text-left text-gray-600 dark:text-gray-300"  >Name</th>
                        <th class="text-left text-gray-600 dark:text-gray-300" onClick={()=>sortBy()}>last_update</th>
                        <th class="text-left text-gray-600 dark:text-gray-300" onClick={()=>sortBy()}>last</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(r => 
                    <tr className="border-collapse border-b border-gray-200 dark:border-slate-600" key={r._id}>
                        <td>{r.symbol}</td>
                        <td>{r.name}</td>
                        <td>{r.last_update && format(new Date(r.last_update),"dd/MM/yyyy hh:mm") }</td>
                        <td>{r.last}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div>
  )
}
