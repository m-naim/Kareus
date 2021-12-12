import React from 'react';
import {
  ThemeProvider, createMuiTheme, Link, Button,
} from '@material-ui/core';

import useSettings from '../../localStore/settings';

import PortfolioPage from './PortfolioPage';
import AppNav from '../../components/AppNav';

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
      <PortfolioPage/>
    </div>
  );
}

export default App;
