import {STARTLOADING, FINISHLOADING } from '../../variables/forContacts';

export const actions = {
  startLoading: () => ({type: STARTLOADING}),
  finishLoading: () => ({type: FINISHLOADING}),
};

const loadingReducer = (state = false, action) => {
  switch (action.type){
    case STARTLOADING:
      return true;
    case FINISHLOADING:
      return false;

    default:
      return state;
  }
}

export default loadingReducer;