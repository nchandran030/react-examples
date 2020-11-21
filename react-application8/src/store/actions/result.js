import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElid) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resElid: resElid,
  };
};
