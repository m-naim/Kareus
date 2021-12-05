import React from 'react';
import { Typography } from '@material-ui/core';
import AddDocument from '../assets/svg/undraw_add_document_0hek.svg';

const EmptyElement = () => (

  <div className="centered-container">
    <img src={AddDocument} alt="no tasks" width="200" />
    <Typography color="primary">
      There is no element in this liste... you can create some!
    </Typography>
  </div>
);

export default EmptyElement;
