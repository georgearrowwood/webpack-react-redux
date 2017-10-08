import cookie from 'react-cookies';
import services from './services';

export const loginAction = ({ login, password }, history) => async (dispatch) => {
  try {
    const res = await services.login({ login, password });
    /* eslint-env browser */
    cookie.save('user', res.data.user, { path: '/' });
    cookie.save('userToken', res.data.userToken, { path: '/' });
    dispatch({ type: 'AUTHENTICATED' });
    history.push('/');
  } catch (error) {
    dispatch({
      type: 'AUTHENTICATION_ERROR',
      payload: 'Invalid email or password',
    });
  }
};

export const logoutUser = () => {
  cookie.remove('user', { path: '/' });
  cookie.remove('userToken', { path: '/' });
  return {
    type: 'UNAUTHENTICATED',
  };
};

