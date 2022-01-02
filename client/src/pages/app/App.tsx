import React from 'react';
import {
  ThemeProvider, createMuiTheme, Link, Button,
} from '@material-ui/core';

import useSettings from '../../localStore/settings';

import PortfolioPage from './PortfolioPage';
import AppNav from '../../components/AppNav';
import Portfolios from './Portfolios';

function App(): React.ReactElement {
  const [settings] = useSettings();

  const themeType = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: settings.darkMode ? 'dark' : 'light',
      },
    }),
    [settings],
  );
  return (
    <div>
      <AppNav/>
      <Portfolios/>
    </div>
  );
}

export default App;
