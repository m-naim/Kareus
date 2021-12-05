import React from 'react';
import {
  Typography, List, ListItem, ListItemIcon, Checkbox, ListItemText,
} from '@material-ui/core';
import HidableContainer from '../../../components/HidableContainer';
import WellcomSVG from '../../../assets/svg/undraw_welcome_cats_thqn.svg';
import { useSessionContext } from '../../../context/SessionContextProvider';

const checkLists = [
  {
    id: 1,
    title: 'crée une liste',
    done: false,
  },
  {
    id: 2,
    title: 'crée une Tâche',
    done: false,
  },
  {
    id: 3,
    title: 'crée une Objectif',
    done: false,
  },
  {
    id: 4,
    title: 'gérer tes Preferences',
    done: false,
  },
];
const OnBording = () => {
  const [session] = useSessionContext();
  return (
    <HidableContainer className="container MuiPaper-root MuiPaper-elevation2" storageKey="displayOnBording">
      <div className="centered-container">
        <img className="onbording-img" src={WellcomSVG} alt="no tasks" width="200" />
        <Typography color="secondary" variant="h6" gutterBottom>
          {'Bienvenu ' }
          {session.user.name}
          !
        </Typography>

        <Typography variant="body1" gutterBottom>
          Voici une liste de choses à faire pour t&lsquo;habituer à l&lsquo;application
        </Typography>
        <List dense className="list">
          {checkLists.map((value: any) => (
            <ListItem key={value.id}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.done}
                  disableRipple
                  inputProps={{ 'aria-labelledby': value.id }}
                />
              </ListItemIcon>
              <ListItemText
                secondary={value.title}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </HidableContainer>
  );
};

export default OnBording;
