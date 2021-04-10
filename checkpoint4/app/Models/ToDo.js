

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
         <div class ="col-12 my-2"><input type="checkbox" aria-label="Task Checkbox" class="action cursor" id="todo-ck-box" 
  onclick="app.todosController.completedTodo('${this.id}')" 
  ${this.completed ? 'checked' : ''}>
  ${this.description} <i class="fas fa-times ml-3 text-danger" title='Delete Your ToDo'
  onclick="app.todosController.deleteTodo('${this.id}')"
  ></i></div>
    
          
        `
      }
      
}
      