import React from 'react';
export default [
    {
      field: 'ticker',
      headerName: 'symbol',
      width: 130,
    },
    {
        field: 'expected_performance',
        headerName: 'expected_performance',
        type: 'number',
        width: 180,
        renderCell: (params) => (
            <strong style={{color: params.value>0?'green':'red' }}>
              {`${Number(params.value * 100).toLocaleString()} %`}
            </strong>
          ),

    },
    {
      field: 'future_price',
      headerName: 'future_price',
      width: 180,
    },
    {
      field: 'last',
      headerName: 'Last',
      type: 'number',
      width: 130,
    },
    {
      field: 'accuracy_score',
      headerName: 'accuracy_score',
      type: 'number',
      width: 130,
      renderCell: (params) => (
        <strong style={{color: params.value>0?'green':'red' }}>
          {`${Number(params.value * 100).toLocaleString()} %`}
        </strong>
      ),
    },
    
  ];