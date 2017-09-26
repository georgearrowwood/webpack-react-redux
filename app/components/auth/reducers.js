export default (state = {}, action) => {
  console.log('au red', state);
  switch (action.type) {
    case 'AUTHENTICATED':
      return { ...state, authenticated: true, errorMessage: '' };
    case 'UNAUTHENTICATED':
      return { ...state, authenticated: false };
    case 'AUTHENTICATION_ERROR':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
