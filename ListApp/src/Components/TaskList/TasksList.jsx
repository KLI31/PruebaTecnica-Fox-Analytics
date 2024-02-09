import TaskItem from "../TaskItem/TaskItem";
import "./taskList.css";
import { useState } from "react";


const TasksList = ({
    tasks,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ margin: "12px", padding: "12px" }}>
            {tasks.length !== 0 && (
                <div className="input-search-container">
                    <input
                        type="text"
                        placeholder="Buscar tarea por título"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="input-search"
                    />
                </div>
            )}
            {tasks.length === 0 && (
                <h2 className="no-tasks">No hay tareas para mostrar :)</h2>
            )}
            {filteredTasks.length > 0 && (
                filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleUpdateTask={handleUpdateTask}
                        handleDeleteTask={handleDeleteTask}
                        handleCompleteTask={handleCompleteTask}
                    />
                ))
            )}
            {filteredTasks.length === 0 && tasks.length !== 0 ? (
                <h3 className="no-tasks">No hay tareas que coincidan con tu búsqueda</h3>
            ) : null}

        </div>
    );
};

export default TasksList;
