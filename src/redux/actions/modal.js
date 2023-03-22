import { TOGGLE_MODAL } from '../constants';

const toggleModal = (payload) => ({
  type: TOGGLE_MODAL,
  payload,
});

export default toggleModal;
