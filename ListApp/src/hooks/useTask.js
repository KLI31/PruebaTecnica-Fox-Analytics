import { useReducer, useEffect } from "react";
import taskReducer from "../redux/taskReducer";
import { toast } from "react-hot-toast";

const useTask = () => {
  const initialState = [];

  // Funcion para inicializar el estado de las tareas
  const init = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  };

  // Use reducer to manage state and actions related to tasks
  const [tasks, dispatch] = useReducer(taskReducer, initialState, init);

  // Calcula el numero de tareas
  const taskCount = tasks.length;

  // Calcula el numero de tareas pendientes
  const pendingTasks = tasks.filter((task) => !task.done).length;

  // actualiza el localStorage cada vez que cambia el estado de las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Funcion para agregar una nueva tarea
  const handleNewTask = (task) => {
    dispatch({ type: "Add Task", payload: task });
    toast.success("Felicidades, has creado una nueva tarea");
  };

  // Funcion para eliminar una tarea
  const handleDeleteTask = (id) => {
    dispatch({ type: "Delete Task", payload: id });
    toast.success("Tarea eliminada con éxito");
  };

  // Funcion para actualizar una tarea
  const handleUpdateTask = (id, title, description) => {
    dispatch({ type: "Update Task", payload: { id, title, description } });
    toast.success("Se ha actualizado la tarea con éxito");
  };

  // Funcion para completar una tarea
  const handleCompleteTask = (id) => {
    dispatch({ type: "Complete Task", payload: id });
    toast.success("Felicidades, has completado esta tarea");
  };

  return {
    tasks,
    taskCount,
    pendingTasks,
    handleDeleteTask,
    handleNewTask,
    handleCompleteTask,
    handleUpdateTask,
  };
};

export default useTask;
