import React from 'react';
import {
  List, ListItem, ListItemIcon, Checkbox, ListItemText,
  ListSubheader, FormControl, FormControlLabel, Switch, FormLabel, FormGroup,
} from '@material-ui/core';
import useSettings from '../../../localStore/settings';
import Settings from '../../../localStore/Settings.type';

const displayPreferences: {id: number; title: string; storageKey: keyof Settings}[] = [
  { id: 0, title: 'Citations', storageKey: 'displayQuoteBox' },
  { id: 1, title: 'on bording', storageKey: 'displayOnBording' },
  { id: 2, title: 'statistiques', storageKey: 'displayStatistiques' },
  { id: 3, title: 'objectifes', storageKey: 'displayObjectifes' },
];


const Preferences = () => {
  const [settings, setSettings] = useSettings();

  const handleCheckboxClick = (storageKey: keyof Settings): void => {
    setSettings((prev) => ({ ...prev, [storageKey]: !prev[storageKey] }));
  };

  const handleDarkMode = (): void => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  return (
    <div className="slider-rigth-container-centerd">

      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={settings.darkMode} onChange={handleDarkMode} color="primary" />}
            label="Mode nuit"
          />
          <FormControlLabel
            control={<Switch checked={settings.sound} color="primary" />}
            label="son"
          />
        </FormGroup>
      </FormControl>
      <List
        className="list"
        subheader={(
          <ListSubheader component="div" id="nested-list-subheader">
            Affichage
          </ListSubheader>
      )}
      >
        {
            displayPreferences.map((li) => (
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={settings[li.storageKey]}
                    onChange={() => handleCheckboxClick(li.storageKey)}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={li.title}
                />

              </ListItem>
            ))
        }
      </List>
    </div>
  );
};

export default Preferences;
