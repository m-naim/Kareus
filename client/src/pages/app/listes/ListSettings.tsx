import React from 'react';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField, Typography, Input, FormControlLabel, Switch,
} from '@material-ui/core';
import { useContextValue } from '../../../context/AppContextProvider';
import { list, task } from '../../../context/state';


const ListSettings = () => {
  const [{ lists, selectedList }, dispatch] = useContextValue();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_LIST', payload: { [e.currentTarget.id]: e.currentTarget.value } });
  };


  const opendTask: list = lists.find((t: list) => t.id === selectedList);

  return opendTask
    ? (
      <div className="container-left">
        <h1>list</h1>
        <FormControlLabel
          control={(
            <Switch

              name="hide tasks"
              color="primary"
            />
            )}
          label="masquer les tache effectué"
        />
      </div>
    ) : null;
};

export default ListSettings;
