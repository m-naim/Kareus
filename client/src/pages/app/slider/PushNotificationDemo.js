import React from 'react';
import { Button } from '@material-ui/core';
import usePushNotifications from '../../../hooks/useNotification';

export default function PushNotificationDemo() {
  const {
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    pushServerSubscriptionId,
    onClickSendNotification,
    userConsent,
    pushNotificationSupported,
    userSubscription,
    error,
    loading,
  } = usePushNotifications();

  return (
    <div>
      {error && (
        <section className="app-error">
          <h2>{error.name}</h2>
          <p>
            Error message :
            {' '}
            {error.message}
          </p>
          <p>
            Error code :
            {' '}
            {error.code}
          </p>
        </section>
      )}
      {loading && 'Loading, please stand by'}
      <p>
        Push notification are
        {' '}
        {!pushNotificationSupported && 'NOT'}
        {' '}
        supported by your device.
      </p>
      <p>
        User consent to recevie push notificaitons is
        {' '}
        <strong>{userConsent}</strong>
        .
      </p>
      <Button onClick={onClickAskUserPermission}>Ask user permission</Button>
      <Button onClick={onClickSusbribeToPushNotification}>Create Notification subscription</Button>
      <Button onClick={onClickSendSubscriptionToPushServer}>
        Send subscription to push server
      </Button>
      <Button onClick={onClickSendNotification}>Send a notification</Button>
    </div>
  );
}
