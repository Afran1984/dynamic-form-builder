export const saveFormToLocalStorage = (formSchema: any) => {
  localStorage.setItem("dynamicForm", JSON.stringify(formSchema));
};

export const loadFormFromLocalStorage = () => {
  const data = localStorage.getItem("dynamicForm");
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
