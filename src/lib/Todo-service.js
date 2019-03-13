import axios from 'axios';

class TodoService {
    constructor() {
      this.todo = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
      })
    }

    getAllTodos() {
      return this.todo.get('/todos')
      .then(({ data }) => data);
    }

    getTodo(id) {
      return this.todo.get(`/todos/${id}`)
      .then(({ data }) => data);
    }
    
    createTodo(todo) {
      return this.todo.post('/todos', todo)
      .then(({ data }) => data);
    }

    updateTodo(id, todo){
      return this.todo.put(`/${id}/todo/update`, {todo})
    }

    deleteTodo(id){
      return this.todo.delete(`/todos/${id}`)
    }
}

const todoService = new TodoService();

export default todoService;