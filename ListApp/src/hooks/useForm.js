import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setForm(initialForm);
  };

  return {
    ...form,
    form,
    onInputChange,
    onResetForm,
  };
};

export default useForm;
