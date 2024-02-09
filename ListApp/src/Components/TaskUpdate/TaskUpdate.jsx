import React, { useState } from 'react';
import { FaPen } from "react-icons/fa";
import "./taskUpdate.css"
import { toast } from "react-hot-toast";
import { FaSave } from "react-icons/fa";
import useForm from '../../hooks/useForm';

const TaskUpdate = ({ task, handleUpdateTask }) => {
    const [disabled, setDisabled] = useState(true);
    const { title, description, onInputChange, onResetForm } = useForm({
        title: task.title,
        description: task.description,
    })

    const onSubmitUpdate = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!title.trim() || !description.trim()) {
            toast.error("No puedes dejar campos vacios");
            return;
        }

        handleUpdateTask(task.id, title, description);
        setDisabled(true);


        onResetForm();
    };

    const handleEditClick = () => {
        setDisabled(false);

    };

    return (
        <form className="form-update" onSubmit={onSubmitUpdate}>
            {disabled ? (
                <></>
            ) : (
                <div>
                    <input
                        type="text"
                        className="input-task-update"
                        name="title"
                        placeholder="Titulo de tu tarea"
                        value={title}
                        onChange={onInputChange}
                    />
                    <textarea
                        style={{ resize: 'none' }}
                        type="text"
                        className="input-description-task-update"
                        name="description"
                        placeholder="Agrega una descripcion a tu tarea"
                        value={description}
                        onChange={onInputChange}
                    />
                </div>
            )}
            {disabled && (
                <button className="btn-edit" type="button" onClick={handleEditClick}>
                    <FaPen />
                    Editar tarea
                </button>
            )}
            <div style={{ flex: "1", display: "flex", gap: "12px" }}>
                {!disabled && (
                    <button className="btn-edit" type="submit">
                        <FaSave />
                        Guardar
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskUpdate;
