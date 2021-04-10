

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
        <form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
        <input type="text" name="name" id="name" class="form-control" placeholder="Add Task Here..."
            aria-describedby="helpId" required minlength="3" maxlength="50">
            
        <button type="submit" class="btn btn-success ml-2" title='add task here'><i class="fas fa-plus-circle"></i></button>
    </form>
        <div class="col-md-4">
         <input type="checkbox" aria-label="ToDo Checkbox" class="action cursor" id="todo-ck-box" 
  onsubmit="app.todosController.completeTodo('${this.id}')" 
  ${this.completed ? 'checked' : ''}>
  ${this.description} <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
  onclick="app.todosController.deleteTodo('${this.id}')"
  ></i></div>
    
          
        `
      }
      
}
      