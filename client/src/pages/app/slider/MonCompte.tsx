import React from 'react';
import { TextField, Avatar, Button } from '@material-ui/core';
import useStyles from '../../../utils/useStyles';
import { useSessionContext } from '../../../context/SessionContextProvider';


const MonCompte = () => {
  const [session] = useSessionContext();
  const classes = useStyles();

  const { user } = session;
  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>): void => {
    // setuserInfos({ ...userInfos, [prop]: event.target.value });
  };

  return (
    <div className="slider-rigth-container-centerd">
      <Avatar className={classes.large} alt="user avatar" src={user.photo || 'https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png'} />

      <TextField
        className="form-control"
        label="Nom de L'utilisateur"
        name="username"
        onChange={handleChange('username')}
        value={user.name}
      />
      <TextField
        className="form-control"
        label="Email de L'utilisateur"
        name="Email"
        onChange={handleChange('email')}
        value={user.email}
      />

      <Button>Suppimer mon compte</Button>
    </div>
  );
};

export default MonCompte;
