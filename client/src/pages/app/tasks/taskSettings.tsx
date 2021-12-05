import React from 'react';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField, Typography, Input,
} from '@material-ui/core';
import { useContextValue } from '../../../context/AppContextProvider';
import { task } from '../../../context/state';


const TaskSettings = () => {
  const [{ tasks, selectedTask }, dispatch] = useContextValue();


  const handleDateChange = (date: Date | null) => {
    let fomatedDate = null;
    if (date) fomatedDate = format(date, 'dd MMMM yyyy');
    dispatch({ type: 'UPDATE_TASK', payload: { echeance: fomatedDate } });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { [e.currentTarget.id]: e.currentTarget.value } });
  };

  const opendTask: task = tasks.find((t: task) => t.id === selectedTask);

  return opendTask
    ? (
      <div className="container-left">
        <Typography variant="body2" color="textSecondary">
          Titre
        </Typography>
        <Input
          id="title"
          value={opendTask.title}
          onChange={handleChange}
          multiline
          fullWidth
          disableUnderline
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            autoOk
            clearable
            disablePast
            format="d MMMM yyyy"
            margin="normal"
            id="echeance"
            label="echeance"
            value={opendTask.echeance}
            onChange={handleDateChange}
          />

        </MuiPickersUtilsProvider>

        <Typography variant="body2" color="textSecondary">
          Rappel
        </Typography>


        <TextField
          id="note"
          label="note"
          multiline
          rows="5"
          value={opendTask.note || ''}
          variant="filled"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    ) : null;
};

export default TaskSettings;
