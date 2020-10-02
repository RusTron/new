import {MODAL1VISIBLE, MODAL1INVISIBLE } from '../../variables/forHome';
// import {}
const modalInitialState = () => ({
  modal1Visible: false,
});

export const modalReducer = (state = modalInitialState, action) => {
  debugger;
  switch (action.type) {
    case MODAL1VISIBLE:
      return {
        ...state,
        modal1Visible: state.modal1Visible = true,
      };
    case MODAL1INVISIBLE:
      return {
        ...state,
        modal1Visible: state.modal1Visible = false,
      };
    default:
      return state;
  }
};