import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";






//Private
function _draw() {
  let todo = ProxyState.todos;
  let template = ''
  if (todo.length == 0) {
    template += '<div class="col text-center"><p><em>no list</em><p></div>'
  }
  todo.forEach(l => template += l.Template)
  document.getElementById("TODOS").innerHTML = template
} 

//Public
export default class ToDoController {
  constructor() {
    ProxyState.on("todos", _draw);
  

    _draw()
  }

  addToDo() {
    window.event.preventDefault();
    let form = window.event.target
    let newtoDo ={
      description: form.description.value
    
    }
    todoService.addToDo(newtoDo)
    // @ts-ignore
    form.reset()
  }
  async getTodos(){
    try {
      await toDoService.getTodos()
    } catch (error) {
      console.error(error);
    }
  }

  completeToDo(id){
    toDoService.completeToDo(id)
  }

  deleteToDo(id) {
    todoService.deletetoDo(id)
  }
}