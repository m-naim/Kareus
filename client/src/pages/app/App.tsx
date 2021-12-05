import React from 'react';
import {
  ThemeProvider, createMuiTheme,
} from '@material-ui/core';
import TaskContainer from './tasks/TaskContainer';
import SideBar from './sideBar/sideBar.jsx';
import StatesBar from './statistics/StatesBar';
import SliderModel from './slider/SliderModel';
import useSettings from '../../localStore/settings';
import { AppContextProvider } from '../../context/AppContextProvider';
import { green, purple } from '@material-ui/core/colors';

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
    <ThemeProvider theme={themeType}>
      <AppContextProvider>
        <main className="main-container">
          <SideBar />
          <TaskContainer />
          <StatesBar />
          <SliderModel />
        </main>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
