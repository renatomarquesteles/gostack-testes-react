import produce from "immer";

export const INITAL_STATE = [];

export default function techs(state = INITAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "ADD_TECH":
        draft.push(action.payload.tech);
        break;
      default:
    }
  });
}
