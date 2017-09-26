import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';


const lifecycleMethods = { 
  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/login');
    }
  },
  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated) {
      this.props.history.push('/login');
    }
  },
};

const mapStateToProps = state =>
  ({ authenticated: state.auth.authenticated });

export default (ComposedComponent) => {
  const enhance = compose(
    withRouter,
    connect(mapStateToProps),
    lifecycle(lifecycleMethods),
  );
  return enhance(ComposedComponent);
};
