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
    template += '<div class="col text-center"><p><em>All Tasks Complete</em><p></div>'
  }
  todo.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
} 

//Public
export default class ToDosController {
  constructor() {
    ProxyState.on("todos", _draw);
    this.getToDos()
    
  }

  addToDo() {
    window.event.preventDefault();
    let form = window.event.target
    let newtoDo ={
      description: form.description.value,
    }
    todosService.addToDo(newtoDo)
    // @ts-ignore
    form.reset()
  }
  async getToDos(){
    try {
      await todosService.getToDos()
    } catch (error) {
      console.error(error);
    }
  }

  async deleteAll(){
    try{
      await todosService.deleteAll()
    }catch (error){
      console.error(error)
    }

  }

  completedToDo(id){
    todosService.completedToDo(id)
  }

  deleteToDo(id) {
    todosService.deleteToDo(id)
  }
}