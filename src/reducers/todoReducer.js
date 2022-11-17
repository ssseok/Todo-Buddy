import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "../actions";
import { initialState } from "./initialState";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todo: [...state.todo, action.payload.todo],
      });
      break;

    case CHECK_TODO:
      return (
        Object.assign,
        ({},
        state,
        {
          todo: state.todo.map((el) =>
            el.id === action.payload.todo.id ? action.payload.todo : el
          ),
        })
      );
      break;
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todo: state.todo.filter((el) => el.id !== action.payload.todo.id),
      });
      break;
    default:
      return state;
  }
};

export default todoReducer;
