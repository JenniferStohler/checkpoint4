

export default class ToDo {
  constructor(data) {
    this.user = data.user
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
  }
  
    // //the server will create these properties for you
    // _id: {type: String, required: true, unique: true }
    // completed: { type: Boolean, required: true, default: false},
    // user: { type: String, required: true },
    // //You will need to provide a description
    // description: { type: String, required: true},

                                       

    
      get Template() {
        return  `
    <div class="col-md-4">
      <input type="checkbox" aria-label="Checkbox" class="action cursor" id="checkbox" 
  onclick="app.toDosController.completedToDo('${this.id}')" 
  ${this.completed ? 'checked' : ''}>
  ${this.description} <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
  onclick="app.toDosController.deleteToDo('${this.id}')"
  ></i></div>
  `
}
    get incompleteTodos(){
      let incompleteToDos = ProxyState.todos.filter(t => t.id === this.id && ti.checked == false)
      return incompleteToDos.length
    }
  }

    
          
