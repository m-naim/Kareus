import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  TextField, InputLabel, InputAdornment,
  IconButton, Button, FormControl, FilledInput, Typography, Input, FormHelperText,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import useAuthentification from '../../hooks/useAuthentification';
import { emailValidation, passwordValidation } from '../../utils/validationUtils';

const Local = (props: any) => {
  const [values, setValues] = React.useState<any>({
    password: '',
    passwordError: null,
    email: '',
    emailError: null,
    showPassword: false,
  });
  const { authetificate } = useAuthentification();

  const handleChange = (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validate = (prop: any) => (event: any) => {
    let error = null;
    if (prop === 'email') error = emailValidation(event.target.value);
    if (prop === 'password') error = passwordValidation(event.target.value);
    setValues({ ...values, [`${prop}Error`]: error });
  };


  const HandleConection = async () => {
    const user = { email: values.email, password: values.password };
    try {
      if (!values.passwordError && !values.emailError) {
        await authetificate(user);
      }
    } catch (error) {
      const { message } = error;
      setValues({ ...values, emailError: message, passwordError: message });
    }
  };

  return (
    <form noValidate className="login-form" onSubmit={HandleConection}>

      <TextField
        error={!!values.emailError}
        className="form-control"
        id="filled-basic"
        label="Email"
        value={values.email}
        helperText={values.emailError}
        onChange={handleChange('email')}
        onBlur={validate('email')}
      />

      <FormControl className="form-control" error={!!values.passwordError}>
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <Input
          id="filled-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          onBlur={validate('password')}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
              )}
        />
        <FormHelperText id="component-error-text">{values.passwordError}</FormHelperText>
      </FormControl>

      <Button
        className="form-control"
        variant="outlined"
        onClick={HandleConection}
        color="primary"
      >
        Se connecter
      </Button>

      <div className="box">
        <Typography color="textSecondary">tu n&lsquo;a pas de compte?</Typography>
        <Button
          variant="text"
          component={Link}
          to="/register"
        >
          s&apos;inscrire
        </Button>
      </div>

    </form>
  );
};


export default Local;
