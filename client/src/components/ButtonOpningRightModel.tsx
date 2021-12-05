import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { useContextValue } from '../context/AppContextProvider';

const ButtonOpningRightModel = ({ component, id }: any) => {
  const [, dispatch] = useContextValue();
  const handleOpen = () => {
    dispatch({ type: 'SELECT_TASK', payload: id });
    dispatch({ type: 'OPEN_MODEL', payload: { position: 'right', component } });
  };

  return (
    <IconButton color="primary" onClick={handleOpen}>
      <MoreVertIcon fontSize="small" />
    </IconButton>
  );
};

export default ButtonOpningRightModel;
