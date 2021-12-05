import React from 'react';
import {
  Avatar, Typography,
} from '@material-ui/core';
import UserMenu from './userMenu';
import { useSessionContext } from '../../../context/SessionContextProvider';


const UserPanel = () => {
  const [session] = useSessionContext();
  return (
    <div className="header-card">
      <div className="horizontal-item">
        <Avatar className="avatar" alt="user avatar" src={session.user.photo} />
        <Typography variant="h6" className="small-margin">
          {session.user.name}
        </Typography>
      </div>
      <div className="space-filler" />
      <UserMenu />
    </div>
  );
};
export default UserPanel;
