import { TOGGLE_MODAL } from '../constants';

const initialState = {
  isOpen: false,
  modalType: '',
};

export default function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload.status,
        modalType: action.payload.type,
      };
    default: return state;
  }
}
