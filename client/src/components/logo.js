import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Sodo from '../assets/svg/sodo.svg';

function Logo(props) {
  return (
    <div className="logo">
      <img src={Sodo} alt="no tasks" width="32" />
      <Typography variant="h4" color="primary" component={Link} to="/">sodo</Typography>

    </div>
  );
}

export default Logo;
