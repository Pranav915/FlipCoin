import { mainActions } from "../actions/mainActions";

const initState = {
  isChatOpen: false,
  outfitList: null,
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case mainActions.GET_ALL_SUGGESTIONS:
      return {
        ...state,
        outfitList: action.outfitList,
      };

    default:
      return state;
  }
};

export default mainReducer;
