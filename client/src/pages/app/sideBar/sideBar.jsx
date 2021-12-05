import React from 'react';
import { Button, Paper } from '@material-ui/core';
import ListsContainer from '../listes/ListsContainer';
import UserPanel from './userPanel.tsx';
import Logo from '../../../components/logo';


function SideBar() {
  return (
    <Paper variant="outlined" square className="side-container">
        <Logo />
        <ListsContainer />
        <div>
          <Button href="#">Statistiques</Button>
          <Button href="#">Objectives</Button>
        </div>
        <UserPanel />

    </Paper>
  );
}

export default SideBar;
