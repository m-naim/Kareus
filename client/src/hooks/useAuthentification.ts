import { useHistory } from 'react-router-dom';
import authService from '../services/authService';
import { useSessionContext } from '../context/SessionContextProvider';


const UseAuthentification = () => {
  const [, setSession] = useSessionContext();
  const history = useHistory();


  const startSession = (res: any) => {
    localStorage.setItem('token', res.token);
    setSession({ ...res, isAuthentificated: true });
    history.push('/app');
  };

  const register = async (user: any) => {
    const res = await authService.register(user);
    startSession(res);
  };


  const authetificate = async (user: any) => {
    const res = await authService.login(user);
    startSession(res);
  };

  const authetificateWithSocial = (res: any) => {
    startSession(res);
  };


  const signout = () => {
    setSession({ isAuthentificated: false });
    localStorage.setItem('token', '');
    history.push('/');
  };

  return {
    authetificate,
    authetificateWithSocial,
    signout,
    register,
  };
};

export default UseAuthentification;
