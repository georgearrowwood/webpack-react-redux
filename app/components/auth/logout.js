import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { logoutUser } from './actions';

const lifecycleMethods = {
  componentWillMount() {
    this.props.logoutUser();
  },
};

const enhance = compose(
  connect(null, { logoutUser }),
  lifecycle(lifecycleMethods),
);

export default enhance(() => null);
