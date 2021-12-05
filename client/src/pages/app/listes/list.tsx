import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import { ListItemIcon, Typography } from '@material-ui/core';
import { useContextValue } from '../../../context/AppContextProvider';


export default function Item({ value, selectedId, selectId }: any) {
  const [{ tasks }] = useContextValue();

  const progress = {
    total: tasks.filter((i: any) => i.listID === value.id).length,
    done: tasks.filter((i: any) => i.done).filter((i: any) => i.listID === value.id).length,
  };
  return (
    <ListItem
      button
      key={value.id}
      onClick={(event) => selectId(event, value.id)}
      selected={selectedId === value.id}
    >
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary={value.title} />
      <ListItemSecondaryAction>
        <Typography component="span" variant="body2" color="textSecondary">
          {' '}
          {progress.done}
          /
          {progress.total}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
