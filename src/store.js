import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: { todo: [] },
  reducers: {
    add: (state, action) => {
      Object.assign({}, state, {
        todo: state.todo.push(action.payload),
      });
    },
    check: (state, action) =>
      Object.assign({}, state, {
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      }),
    remove: (state, action) =>
      Object.assign({}, state, {
        todo: state.todo.filter((el) => el.id !== action.payload.id),
      }),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, check, remove } = toDos.actions;

export default store;
