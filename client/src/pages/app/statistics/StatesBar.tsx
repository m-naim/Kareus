import React from 'react';
import {
  Paper, Typography, makeStyles, Theme, createStyles, useTheme, Button,
} from '@material-ui/core';
import { useContextValue } from '../../../context/AppContextProvider';
import StatsTable from './statsTable';
import statsExtractor from '../../../utils/statsDataUtils';
import Objectifs from './Objectifs';
import OnBording from './OnBording';
import QuoteBox from './quoteBox';
import './index.css';



const StatesBar = () => {
  const [{ tasks }] = useContextValue();
  const statsData = statsExtractor(tasks);

  const theme = useTheme();

  return (
    <Paper variant="outlined"  className="right-container">
      <div className="container">
        <Paper elevation={0} square className="header-card">
          <Typography variant="h6" color="textPrimary">Statistiques</Typography>
        </Paper>
        <StatsTable data={statsData} />
        <Button >voir plus</Button>
      </div>
      <Objectifs />  
      <OnBording />
      <QuoteBox />



    </Paper>
  );
};

export default StatesBar;
