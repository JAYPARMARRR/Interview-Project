import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTasks = () => {
  return axios.get(API_URL);
};

export const addTask = (task) => {
  return axios.post(API_URL, {
    title: task,
    completed: false,
  });
};

export const updateTask = (id, updatedTask) => {
  return axios.put(`${API_URL}/${id}`, {
    ...updatedTask,
  });
};

export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
