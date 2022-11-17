// action types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHECK_TODO = "CHECK_TODO";

// actions creator functions
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const checkTodo = (todo) => {
  return {
    type: CHECK_TODO,
    payload: {
      todo,
    },
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: {
      todo,
    },
  };
};
