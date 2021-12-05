import { createLocalStorageStateHook } from 'use-local-storage-state';
import Settings from './Settings.type';


const useSettings = createLocalStorageStateHook<Settings>('settings',
  {
    darkMode: false,
    sound: true,
    displayQuoteBox: true,
    displayStatistiques: true,
    displayOnBording: true,
    displayObjectifes: true,
    displayDoneTasks: true,
    default: true,
  });

export default useSettings;
