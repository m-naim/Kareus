import React, { useState } from 'react';
import {
  Typography, List, IconButton, FormControlLabel, Switch,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Task from './task';
import { useContextValue } from '../../../context/AppContextProvider';
import AddForm from '../../../components/addForm';
import newId from '../../../utils/newId';
import EmptyElement from '../../../components/EmptyElement';
import AlertDialog from '../../../components/AlertDialog';
import HidableContainer from '../../../components/HidableContainer';
import { task, list } from '../../../context/state';
import Settings from '../../../localStore/Settings.type';
import useSettings from '../../../localStore/settings';
import ButtonOpningRightModel from '../../../components/ButtonOpningRightModel';



const TaskContainer = () => {
  const [{ tasks, lists, selectedList }, dispatch] = useContextValue();
  const [audio] = useState(() => new Audio(`${process.env.PUBLIC_URL}sounds/beep.mp3`));
  const [{ displayDoneTasks }, setState] = useSettings();

  const displayedList = lists.find((item: list) => item.id === selectedList);
  const selectedTasks = tasks.filter((item: task) => item.listID === selectedList) || [];
  const displayedTasks = displayDoneTasks
    ? selectedTasks.filter((item: task) => !item.done)
    : selectedTasks;

  const toggleSwitch = () => {
    setState((prev: Settings) => ({ ...prev, displayDoneTasks: !displayDoneTasks }));
  };
  const handleAdd = (title: any) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        listID: selectedList, id: newId('t_'), title, creationDate: new Date(), done: false,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedList,
    });
  };

  const handleClose = () => {
    dispatch({
      type: 'SELECT_LIST',
      payload: null,
    });
  };

  return (
    <HidableContainer
      className="task-container MuiPaper-root "
      header={(
        <div className="header-card">
          <IconButton className="close-btn" color="secondary" aria-label="close" onClick={handleClose}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" color="textPrimary">
            {displayedList ? displayedList.title : '' }
          </Typography>
          <div className="space-filler" />
          <div className="actoins-container">
            <AlertDialog action={handleDelete} />
            <ButtonOpningRightModel component="LIST_SETTINGS" />
          </div>
        </div>
        )}
      openStatus={Boolean(selectedList)}
    >
      
      <div className="list">

        <List >
          {
            displayedTasks.length
            ? displayedTasks
            .map((t: task) => <Task key={t.id} data={t} beep={audio} />)
            : <EmptyElement />
          }
        </List>

        <AddForm add={handleAdd} label="Ajouter une Tâche" />
        <div className="container">
        <FormControlLabel
          control={(
            <Switch
              checked={displayDoneTasks}
              onChange={toggleSwitch}
              name="hide tasks"
              color="primary"
            />
            )}
          label="masquer les tache effectué"
        />
        </div>
      </div>


    </HidableContainer>
  );
};

export default TaskContainer;
