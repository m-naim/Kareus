import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography' ;
import { Paper } from '@material-ui/core';

const columns = [
  {
    field: 'symbol',
    headerName: 'symbol',
    width: 130,
  },
  // {
  //   field: 'action',
  //   headerName: 'action',
  //   width: 120,
  // },
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    width: 130,
  },
  {
    field: 'date',
    headerName: 'date',
    type: 'Date',
    width: 130,
    valueFormatter: (param) => {
        const date= new Date(param.value);
        return format(date, 'dd/MM/yyyy')
      },
  },
  {
    field: 'qty',
    headerName: 'qty',
    type: 'number',
    width: 100,
  },
  // {
  //   field: 'value',
  //   headerName: 'value',
  //   type: 'number',
  //   width: 130,
  // },

];

function Orders({rows}) {


    return (
        <Paper style={{display: 'flex',flexDirection:'column', width:'60%' }}>
            <DataGrid
                autoHeight
                rowHeight={25} 
                rows={rows}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                disableSelectionOnClick
            />
      </Paper>
    );
}
  
export default Orders;