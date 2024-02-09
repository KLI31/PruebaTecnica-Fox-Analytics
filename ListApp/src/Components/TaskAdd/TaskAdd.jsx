import "./taskAdd.css";
import useForm from "../../hooks/useForm";
import { toast } from "react-hot-toast"
import { FaCirclePlus } from "react-icons/fa6";


const TaskAdd = ({ handleNewTask }) => {
    const { description, title, onInputChange, onResetForm } = useForm({
        title: "",
        description: "",
    });


    const onFormSubmit = e => {
        e.preventDefault()

        if (!title.trim() || !description.trim()) {
            toast.error("No puedes dejar campos vacios");
            return;
        }

        let newTask = {
            title: title,
            description: description,
            id: new Date().getTime(),
            done: false,
        };

        handleNewTask(newTask);
        onResetForm();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                type="text"
                className="input-task"
                name="title"
                placeholder="Titulo de tu tarea"
                value={title}
                onChange={onInputChange}
            />
            <textarea
                style={{ resize: "none" }}
                type="text"
                className="input-description-task"
                name="description"
                placeholder="Agrega una descripcion a tu tarea"
                value={description}
                onChange={onInputChange}
            />
            <button className="btn-add" type="submit"><FaCirclePlus />Agregar tarea</button>

        </form>



    );
};

export default TaskAdd;
