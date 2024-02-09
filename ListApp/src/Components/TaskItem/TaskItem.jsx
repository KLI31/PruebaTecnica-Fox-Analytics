import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import TaskUpdate from "../TaskUpdate/TaskUpdate";
import "./taskItem.css";

const TaskItem = ({
    task,
    handleUpdateTask,
    handleCompleteTask,
    handleDeleteTask,
}) => {
    return (
        <div>
            <div className={task.done ? "container-task" : "pending-container"}>
                <div className="info-task">
                    <h3>Titulo: {task.title}</h3>
                    <p>Descripcion: {task.description}</p>
                    <span style={{ fontWeight: "bold", }}>
                        Estado: {task.done ? "Completada" : "Pendiente"}
                    </span>
                </div>
                <div className="btns-container">
                    <button
                        onClick={() => handleDeleteTask(task.id)}
                        className="btn-delete"
                    >
                        <FaTrash />
                        Eliminar Tarea
                    </button>
                    {!task.done && (
                        <button
                            onClick={() => handleCompleteTask(task.id)}
                            className="btn-complete"
                        >
                            <FaCheckCircle />
                            Completar Tarea
                        </button>
                    )}
                </div>
                <div style={{ marginTop: "18px" }}></div>
                <TaskUpdate task={task} handleUpdateTask={handleUpdateTask} />
            </div>
        </div>
    );
};

export default TaskItem;
