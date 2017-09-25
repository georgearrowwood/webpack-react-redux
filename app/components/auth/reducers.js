export default (state = {}, action) => {
  console.log('au red', state);
  switch (action.type) {
    case 'AUTHENTICATED':
      return { ...state, authenticated: true };
    case 'UNAUTHENTICATED':
      return { ...state, authenticated: false };
    case 'AUTHENTICATION_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
