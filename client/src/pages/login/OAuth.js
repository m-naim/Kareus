import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import config from '../../config';
import UseAuthentification from '../../hooks/useAuthentification';

const OAuth = (props) => {
  const [state, setState] = useState({
    disabled: '',
  });
  const { authetificateWithSocial } = UseAuthentification();
  const { provider } = props;
  let popup;
  let check;

  useEffect(() => {
    const { socket } = props;
    socket.on(provider.name, (user) => {
      if (popup !== undefined) popup.close();
      authetificateWithSocial(user);
    });

    return () => { clearInterval(check); };
  }, []);


  const checkPopup = () => {
    check = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        setState({ ...state, disabled: '' });
      }
    }, 1000);
  };

  const openPopup = () => {
    const { socket } = props;
    const width = 600; const height = 600;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    const url = `${config.API_URL}/${provider.name}?socketId=${socket.id}`;
    return window.open(url, '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`);
  };


  const startAuth = (e) => {
    if (!state.disabled) {
      e.preventDefault();
      popup = openPopup();
      checkPopup();
      setState({ ...state, disabled: 'disabled' });
    }
  };


  return (
    <Button
      className="form-control"
      startIcon={<img width="28" src={provider.svg} alt="logo" />}
      variant="outlined"
      onClick={startAuth}
      fullWidth
    >
      continuer avec
      {' '}
      {provider.name}
    </Button>
  );
};

export default OAuth;
