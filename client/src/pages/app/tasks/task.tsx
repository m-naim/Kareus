import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContextValue } from '../../../context/AppContextProvider';
import { task } from '../../../context/state';

interface Props{data: task; beep: HTMLAudioElement}

const Task: React.FC<Props> = ({ data, beep }) => {
  const [, dispatch] = useContextValue();
  const handleDelete = (): void => {
    dispatch({
      type: 'DELETE_TASK',
      payload: data.id,
    });
  };

  const handleChange = (): void => {
    if (!data.done) {
      // eslint-disable-next-line no-param-reassign
      beep.currentTime = 0;
      beep.play();
    }
    dispatch({
      type: 'TOGLE_DONE',
      payload: {
        id: data.id,
        updates: {
          doneDate: new Date(),
          done: !data.done,
        },
      },
    });
  };
  const handleClick = (): void => {
    dispatch({ type: 'SELECT_TASK', payload: data.id });
    dispatch({ type: 'OPEN_MODEL', payload: { position: 'right', component: 'TASK_SETTINGS' } });
  };

  return (
    <ListItem divider key={data.id} button onClick={handleClick}>
      <ListItemText
        primary={data.title}
        secondary={data.echeance || ''}
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="start"
          checked={data.done}
          onChange={handleChange}
          disableRipple
          inputProps={{ 'aria-labelledby': data.id }}
        />
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  );
};

export default Task;
