import {
  EDIT_SIDEBAR_ACTIVE
} from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_SIDEBAR_ACTIVE:
      return {
        ...state,
        sidebarIsActive: action.payload,
      };

    default:
      return state;
  }
};
