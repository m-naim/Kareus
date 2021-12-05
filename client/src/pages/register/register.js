import React from 'react';
import {
  Button, FilledInput, FormControl, InputAdornment, InputLabel, Typography, IconButton, TextField, Input, FormHelperText,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import UseAuthentification from '../../hooks/useAuthentification';
import Logo from '../../components/logo';
import { emailValidation, passwordValidation } from '../../utils/validationUtils';

const Register = () => {
  const [values, setValues] = React.useState({
    userName: '',
    password: '',
    checkPassword: '',
    email: '',
    showPassword: false,
  });
  const { register } = UseAuthentification();


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const HandleSubscription = async () => {
    const user = {
      email: values.email,
      password: values.password,
      passwordCheck: values.checkPassword,
      displayName: values.userName,
    };
    try {
      await register(user);
    } catch (error) {
      console.log(error);
    }
  };
  const validate = (prop) => (event) => {
    let error = null;
    if (prop === 'email') error = emailValidation(event.target.value);
    if (prop === 'password') error = passwordValidation(event.target.value);
    setValues({ ...values, [`${prop}Error`]: error });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <Logo />
        <Typography variant="h6">Inscription</Typography>

        <form noValidate className="login-form" onSubmit={HandleSubscription}>

          <TextField
            className="form-control"
            id="filled-basic"
            label="Email"
            value={values.email}
            onChange={handleChange('email')}
            onBlur={validate('email')}
            helperText={values.emailError}
            error={!!values.emailError}
          />
          <TextField
            className="form-control"
            id="filled-basic"
            label="Nom"
            value={values.userName}
            onChange={handleChange('userName')}
          />

          <FormControl className="form-control" error={!!values.passwordError}>
            <InputLabel htmlFor="filled-adornment-password">Mot de passe</InputLabel>
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


          <FormControl className="form-control">
            <InputLabel htmlFor="filled-adornment-password">Verfie le mot de passe</InputLabel>
            <Input
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.checkOassword}
              onChange={handleChange('checkPassword')}
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
          </FormControl>

          <Button className="form-control" variant="outlined" onClick={HandleSubscription} color="primary">s&apos;inscrire</Button>

          <div className="box">
            <Typography color="textSecondary">tu a déja un compte?</Typography>
            <Button
              variant="text"
              component={Link}
              to="/login"
            >
              se connecter
            </Button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default Register;
