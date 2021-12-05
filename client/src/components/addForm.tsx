import React, { useState } from 'react';
import { IconButton, Input, InputAdornment } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

function AddForm({ add, label }: any) {
  const [input, setInput] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    add(input);
    setInput('');
  };

  return (
    <form className="add-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Input
        fullWidth
        disableUnderline
        className="input"
        placeholder={label}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="delete" onClick={handleSubmit}>
              <AddCircleOutlinedIcon color="primary" />
            </IconButton>
          </InputAdornment>
      )}
      />
    </form>
  );
}

export default AddForm;
