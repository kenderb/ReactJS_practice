import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fecthUser } from '../actions';

const UserHeader = ({users, userId, fecthUser}) => {
  useEffect(() =>{
    fecthUser(userId);
  }, [])
  return(
    <div>
      {users ? users.name: null}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {users: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps, { fecthUser })(UserHeader);