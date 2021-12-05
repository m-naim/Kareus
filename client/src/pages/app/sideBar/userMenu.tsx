/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Divider,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TuneIcon from '@material-ui/icons/Tune';
import InfoIcon from '@material-ui/icons/Info';
import useAuthentification from '../../../hooks/useAuthentification';
import { useContextValue } from '../../../context/AppContextProvider';


const StyledMenu = (props: any) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
);


export default function UserMenu() {
  const [, dispatch] = useContextValue();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { signout } = useAuthentification();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (component: any) => {
    dispatch({ type: 'OPEN_MODEL', payload: { position: 'left', component } });
    setAnchorEl(null);
  };


  return (
    <div>

      <IconButton onClick={handleClick}>
        <MoreVertIcon fontSize="small" aria-controls="simple-menu" aria-haspopup="true" />
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect('Preferences')}>
          <ListItemIcon>
            <TuneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </MenuItem>
        <MenuItem onClick={() => handleSelect('Mon compte')}>
          <ListItemIcon>
            <PermIdentityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Mon compte" />
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleSelect('A propos')}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="A propos" />
        </MenuItem>
        <MenuItem onClick={() => signout()}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
