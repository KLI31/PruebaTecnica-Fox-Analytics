/* 
   Task : {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    done : 
   }
*/

const taskReducer = (initialState, action) => {
  switch (action.type) {
    case "Add Task":
      return [
        ...initialState,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];

    case "Delete Task":
      return initialState.filter((task) => task.id !== action.payload);

    case "Update Task":
      return initialState.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            description: action.payload.description,
          };
        }
        return task;
      });

    case "Complete Task":
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

    default:
      return initialState;
  }
};

export default taskReducer;
