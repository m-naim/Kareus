import { useState, useEffect } from 'react';

import {
  isPushNotificationSupported,
  askUserPermission,
  registerServiceWorker,
  sendNotification,
  createNotificationSubscription,
  getUserSubscription,
} from '../workers/push-notifications';
import http from '../services/http';

const pushNotificationSupported = isPushNotificationSupported();

export default function usePushNotifications() {
  const [userConsent, setSuserConsent] = useState(Notification.permission);

  const [userSubscription, setUserSubscription] = useState(null);
  const [pushServerSubscriptionId, setPushServerSubscriptionId] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const getExixtingSubscription = async () => {
      const existingSubscription = await getUserSubscription();
      setUserSubscription(existingSubscription);
      setLoading(false);
    };
    getExixtingSubscription();
  }, []);

  const onClickAskUserPermission = () => {
    setLoading(true);
    setError(false);
    askUserPermission().then((consent) => {
      setSuserConsent(consent);
      if (consent !== 'granted') {
        setError({
          name: 'Consent denied',
          message: 'You denied the consent to receive notifications',
          code: 0,
        });
      }
      setLoading(false);
    });
  };

  const onClickSusbribeToPushNotification = () => {
    setLoading(true);
    setError(false);
    createNotificationSubscription()
      .then((subscrition) => {
        setUserSubscription(subscrition);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Couldn't create the notification subscription", err, 'name:', err.name, 'message:', err.message, 'code:', err.code);
        setError(err);
        setLoading(false);
      });
  };


  const onClickSendSubscriptionToPushServer = () => {
    setLoading(true);
    setError(false);
    http
      .post('/subscription', userSubscription)
      .then((response) => {
        setPushServerSubscriptionId(response.id);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };


  const onClickSendNotification = async () => {
    setLoading(true);
    setError(false);
    await http.get(`/subscription/${pushServerSubscriptionId}`).catch((err) => {
      setLoading(false);
      setError(err);
    });
    setLoading(false);
  };


  return {
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
  };
}
