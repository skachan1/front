import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CircularProgress, Alert } from '@mui/material';

import { loginRequested, registerRequested } from '../../redux/actions/auth';
import signupSchema from './signupSchema';

import classes from './ModalWindow.module.css';

function ModalWindow({ isOpen, modalType, handleClose }) {
  const { error, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isSignUp = modalType === 'signup';
  const authHandle = (values) => {
    if (isSignUp) {
      dispatch(registerRequested(values));
    } else {
      dispatch(loginRequested({ email: values.email, password: values.password }));
    }
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal_window}>
        {isLoading
              && (
                <CircularProgress />
              )}
        {error
            && (
            <Alert severity="error">
              { error }
            </Alert>
            )}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {isSignUp ? 'Registration' : 'Login'}
        </Typography>
        <Formik
          initialValues={{ email: '', username: '', password: '' }}
          validationSchema={signupSchema}
          onSubmit={authHandle}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" type="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}

              {isSignUp && <Field name="username" />}

              {isSignUp && errors.username && touched.username && (
              <div>{errors.username}</div>
              )}

              <Field name="password" type="password" />
              {errors.password && touched.password && (
              <div>{errors.password}</div>
              )}

              <button type="submit">{isSignUp ? 'Registration' : 'Login'}</button>
            </Form>
          )}

        </Formik>

        <div className={classes.buttons}>
          <Button variant="contained" onClick={handleClose}> Close </Button>
        </div>
      </Box>
    </Modal>
  );
}

ModalWindow.propTypes = {
  modalType: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

ModalWindow.defaultProps = {
  modalType: '',
  isOpen: false,
};

export default memo(ModalWindow);
