import { ProxyState } from "../AppState.js";
import toDo from "../Models/ToDo.js";
import { sandboxApi } from "./AxiosService.js";


class ToDosService {

  constructor(){
    //console.log("Hello Service!")
  }
   async addToDo(newtoDo) {
     let res = await sandboxApi.post('Gwen/todos', newtoDo)
     let todo = new toDo(res.data)
    ProxyState.todos = [...ProxyState.todos, todo]
    //console.log("hi")
  }
  
  
  async getToDos(){
    let res = await sandboxApi.get('Gwen/todos');
    ProxyState.todos= res.data.map(t => new ToDo(t))
  }

  async completeToDo(id){
    let toDoCheck = ProxyState.todos.find(t => t.id === id)
    if(toDoCheck.completed){
      await sandboxApi.put('Gwen/todos/' + id, {completed: false})
      toDoCheck.completed = false
    } else {
        await sandboxApi.put('Gwen/todos/' + id, {completed: true})
        toDoCheck.completed = true
      }
    ProxyState.todos = ProxyState.todos
  }

  

  
  async deleteToDos(id){
    if(window.confirm('Are You Sure You Want To Delete This Task?')){
      await sandbox.delete('Gwen/todos/'+ id)
      ProxyState.todos = ProxyState.todos.filter(t => t.id !=id)
    }
  }
}


export const todosService = new ToDosService();
