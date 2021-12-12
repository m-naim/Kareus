import React from 'react';

export default [
    {
      field: 'symbol',
      headerName: 'symbol',
      width: 130,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
    },
    {
      field: 'last',
      headerName: 'Last',
      type: 'number',
      width: 130,
    },
    {
      field: 'bpe',
      headerName: 'bep',
      type: 'number',
      width: 130,
    },
    {
      field: 'qty',
      headerName: 'qty',
      type: 'number',
      width: 100,
    },
    {
      field: 'variation',
      headerName: 'variation',
      type: 'number',
      width: 100,
      valueGetter: (params)=> {
        return params.row.last/params.row.bpe-1 ;
      },
      renderCell: (params) => (
        <p style={{color: params.value>0?'green':'red' }}>
          {`${Number(params.value * 100).toLocaleString()} %`}
        </p>
      ),

    },
    {
      field: 'weight',
      headerName: 'weight',
      type: 'number',
      width: 130,
      renderCell: (params) => (
        <strong >
          {`${Number(params.value * 100).toLocaleString()} %`}
        </strong>
      ),
    },
  
  ];