import cookie from 'react-cookies';

import request from '../../modules/request';

export const loginAction = ({ login, password }, history) => (dispatch) => {
    console.log('6', login);
      
    request.post('/api/login', { login, password })
      .then(res => {   
        console.log('res log', res);
        
        dispatch({ type: 'AUTHENTICATED' });
        /* eslint-env browser */
        cookie.save('user', res.data, { path: '/' })
        history.goBack();
      })  
      .catch ((error) => {
        console.log('err log', error);
        dispatch({
          type: 'AUTHENTICATION_ERROR',
          payload: 'Invalid email or password',
        });
      });
};

export const as = 1;

