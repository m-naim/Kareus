import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import columns from './columns';


function PortfolioList({rows}) {


    return (
      <Paper style={{display: 'flex', flexDirection:'column', width:'70%' }}>
        <DataGrid
          autoHeight
          rows={rows}
          rowHeight={35} 
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </Paper>
    );
  }
  
export default PortfolioList;