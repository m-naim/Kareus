import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@material-ui/core';
import React, { useLayoutEffect, useState } from 'react';
import AppNav from '../../components/AppNav';
import columns from './columns.jsx';
import predictionService from '../../services/predictionService';

function Predictions(props) {
    const [rows, setRows] = useState([]);
    const fetchData = async () => {
        const data  = await predictionService.get();
        data.forEach((item, i) => {
            item.id = i + 1;
        });
        setRows(data);
    };

    useLayoutEffect(() => {
        fetchData();
    },[]);
    return (
        <div>
            <AppNav />
            <div style={{display: 'flex',justifyContent: 'center',padding:'5px'}}>
                <Paper style={{ display: 'flex', flexDirection: 'column', width: '60%' ,height:'70%'}}>
                    <DataGrid
                    
                        autoHeight
                        rows={rows}
                        rowHeight={35}
                        columns={columns}
                        rowsPerPageOptions={[15]}
                        disableSelectionOnClick
                    />
                </Paper>
            </div>
        </div>
    );
}

export default Predictions;