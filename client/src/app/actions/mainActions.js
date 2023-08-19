import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const mainActions = {
  GET_ALL_SUGGESTIONS: "MAIN.GET_ALL_SUGGESTIONS",
  SET_OUTFIT_LIST: "MAIN.SET_OUTFIT_LIST",
};

export const setOutfitList = (outfitList) => {
  return {
    type: mainActions.SET_OUTFIT_LIST,
    outfitList,
  };
};

export const getMainActions = (dispatch) => {
  return {
    setOutfitList: (outfitList) => dispatch(setOutfitList(outfitList)),
  };
};
