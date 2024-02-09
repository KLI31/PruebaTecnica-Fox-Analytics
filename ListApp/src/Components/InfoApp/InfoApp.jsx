import TaskAdd from "../TaskAdd/TaskAdd";
import TasksList from "../TaskList/TasksList";
import useTask from "../../hooks/useTask";
import "./infoApp.css";

const ListInfo = () => {
    const {
        tasks,
        taskCount,
        pendingTasks,
        handleDeleteTask,
        handleNewTask,
        handleCompleteTask,
        handleUpdateTask,
    } = useTask();

    return (
        <div className="container">
            <div className="info-tasks">
                <h1 style={{ textAlign: "center" }}>Mi lista de tareas</h1>
                <div className="tasks">
                    <h3>
                        Numero de Tareas: <span>{taskCount}</span>
                    </h3>
                    <h3>
                        Mis tareas pendientes:<span>{pendingTasks}</span>
                    </h3>
                </div>
                <h2>Agregar nueva tarea</h2>
                <TaskAdd handleNewTask={handleNewTask} />
            </div>
            <div>
                <h1 style={{ textAlign: "center" }}>Mis tareas</h1>
                <TasksList
                    tasks={tasks}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                />
            </div>
        </div>
    );
};

export default ListInfo;
