import axios from 'axios';
import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import AuthContext from 'store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;

    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAB7Izk1n8z_VnyDMMGCN9HsjGFpxTzVO8',
        {
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        history.push('/');
      })
      .catch((error) => {
        const errorMessage =
          error.response.data?.error?.message || 'Authentication failed!';
        alert(errorMessage);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={passwordInputRef} type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
