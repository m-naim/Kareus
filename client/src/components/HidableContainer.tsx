import React from 'react';
import {
  IconButton, Typography, Checkbox, Slide, Paper,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Settings from '../localStore/Settings.type';
import useSettings from '../localStore/settings';

type Props={
  children: any;
  className?: string;
  header?: React.ReactElement;
  openStatus?: boolean;
  storageKey?: keyof Settings;
};

const HidableContainer: React.FC<Props> = ({
  children, className, header, openStatus = true,
  storageKey = 'default',
}) => {
  const [settings, setSettings] = useSettings();
  const [open, setOpen] = React.useState(openStatus);

  const handleCheckboxToggle = () => {
    setSettings((prev: Settings) => ({ ...prev, [storageKey]: !prev[storageKey] }));
  };

  const isOpen: () => boolean = () => {
    if (storageKey === 'default') return true;
    if (settings[storageKey]) return open;
    return false;
  };


  return isOpen() ? (
    <Slide direction="right" in={openStatus} mountOnEnter unmountOnExit>
      <div className={className}>
        {(header) || (
          <div className="header-card">
            <div className="horizontal-item">
              <Checkbox
                size="small"
                checked={!settings[storageKey]}
                onChange={handleCheckboxToggle}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              <Typography variant="body2" color="textSecondary">
                Ne plus afficher
              </Typography>
            </div>

            <div className="space-filler" />
            <IconButton className="close-btn" color="secondary" aria-label="close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>

          </div>
        )}
        {children}

      </div>
    </Slide>
  ) : null;
};

export default HidableContainer;
