import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js";






//Private
function _draw() {
  let todo = ProxyState.todos;
  let todosTotal = ProxyState.todos.length 
  let todosIncomplete = ProxyState.todos.filter(t => t.completed == false).length
  let template = ''
  template += `<p>${todosIncomplete}/${todosTotal}</p>`
  if (todo.length == 0) {
    template += '<div class="col text-center"><p><em>no list</em><p></div>'
  }
  todo.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
} 

//Public
export default class ToDosController {
  constructor() {
    ProxyState.on("todos", _draw);
  }

  addToDo() {
    window.event.preventDefault();
    let form = window.event.target
    let newtoDo ={
      description: form.description.value
    }
    todosService.addToDo(newtoDo)
    // @ts-ignore
    form.reset()
  }
  async getTodos(){
    try {
      await toDosService.getTodos()
    } catch (error) {
      console.error(error);
    }
  }

  completeToDo(id){
    toDosService.completeTodo(id)
  }

  deleteToDo(id) {
    toDosService.deleteTodo(id)
  }
}