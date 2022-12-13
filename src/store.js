import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// export const getTodo = createAsyncThunk("GET_TODO", async () => {
//   const response = await axios.get("http://localhost:3001/todo");
//   return response.data;
// });

// export const addTodo = createAsyncThunk("ADD_TODO", async (todo) => {
//   const response = await axios.post("http://localhost:3001/todo", todo);
//   return response.data;
// });

export const toDos = createSlice({
  name: "toDosReducer",
  initialState: { todo: [] },
  reducers: {
    // [getTodo.fulfilled]: (state, action) => {
    //   Object.assign({}, state, {
    //     todo: [...state],
    //   });
    // },
    // [addTodo.fulfilled]: (state, action) => {
    //   Object.assign({}, state, {
    //     todo: state.todo.push(action.payload),
    //   });
    // },
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
    update: (state, action) =>
      Object.assign({}, state, {
        todo: state.todo.map((el) =>
          el.id === action.payload.id ? action.payload.text : el
        ),
      }),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, check, remove, update } = toDos.actions;

export default store;
