import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import io from 'socket.io-client';
import './index.css';
import google from '../../assets/svg/google.svg';
import facebook from '../../assets/svg/facebook.svg';
import config from '../../config.js';
import OAuth from './OAuth';
import Local from './Local';
import Logo from '../../components/logo';


const Login = () => {
  const socket = io(config.API_URL);
  const providers = [{ name: 'google', svg: google }, { name: 'facebook', svg: facebook }];


  return (
    <div className="login-container">
      <Paper className="login-card">
        <Logo />
        <Typography variant="h6">Connection</Typography>

        <Local />

        <div className="separator">
          <div className="middle_separator">ou</div>
        </div>

        <div className="container">
          {providers.map((provider) => (
            <OAuth
              provider={provider}
              key={provider.name}
              socket={socket}
            />
          ))}

        </div>

      </Paper>
    </div>
  );
};

export default Login;
