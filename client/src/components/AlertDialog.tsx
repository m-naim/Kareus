import React from 'react';
import {
  Button, Dialog, DialogTitle, DialogActions, IconButton, 
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export default function AlertDialog(props: any) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidation = () => {
    props.action();
    setOpen(false);
  };
  return (
    <>
      <IconButton color="primary" edge="end" aria-label="delete" onClick={handleClickOpen}>
        <DeleteIcon fontSize="small" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sur to delete this list?</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleValidation} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
