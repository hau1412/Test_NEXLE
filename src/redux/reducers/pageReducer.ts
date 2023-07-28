import {ADD_TO_LIST_CHOOSE} from './../constants/index';

const initialState = {
  listChoose: [],
};

const pageReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case ADD_TO_LIST_CHOOSE:
      console.log('payload', action.payload);
      if (state.listChoose.length == 0) {
        let itemlist = {
          id: action.payload.id,
          name: action.payload.name,
          createdAt: action.payload.createdAt,
          updatedAt: action.payload.updatedAt,
        };
        state.listChoose.push(itemlist);
      } else {
        let itemlist = {
          id: action.payload.id,
          name: action.payload.name,
          createdAt: action.payload.createdAt,
          updatedAt: action.payload.updatedAt,
        };
        state.listChoose.push(itemlist);
      }
      return {
        ...state
      };


    // console.log('sta', state.listChoose[0].id);
    // return {
    //   ...state,
    //   listChoose: action.payload
    // };
    default:
      return state;
  }
};
export default pageReducer;
