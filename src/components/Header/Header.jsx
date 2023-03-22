import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';

import ModalWindow from '../Modal/ModalWindow';
import toggleModal from '../../redux/actions/modal';
import { deleteToken } from '../../storage/token';
import authUser from '../../redux/actions/auth';

import classes from './Header.module.css';

function Header() {
  const dispatch = useDispatch();

  const handleOpen = (type) => {
    dispatch(toggleModal({ status: true, type }));
  };
  const handleClose = () => {
    dispatch(toggleModal({ status: false }));
  };

  const openSignUp = () => {
    handleOpen('signup');
  };

  const openLogin = () => {
    handleOpen('login');
  };

  const logout = () => {
    deleteToken();
    dispatch(authUser());
  };

  const { isOpen, modalType } = useSelector((state) => state.modal);
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className={classes.box}
          >
            News Site
          </Typography>
          { isAuth
            && (
            <div className={classes.buttons}>
              Welcome, username
              <Button onClick={logout} variant="contained" color="warning">
                Logout
              </Button>
              <ModalWindow isOpen={isOpen} modalType={modalType} handleClose={handleClose} />
            </div>
            )}
          { !isAuth
            && (
            <div className={classes.buttons}>
              <Button onClick={openSignUp} variant="contained" color="warning">
                Register
              </Button>
              <Button onClick={openLogin} variant="contained" color="warning">
                Sign in
              </Button>
              <ModalWindow isOpen={isOpen} modalType={modalType} handleClose={handleClose} />
            </div>
            )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default memo(Header);
