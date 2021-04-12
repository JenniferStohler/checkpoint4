export default class Quote {
  constructor({ content, author}){
    this.content = content
    this.author = author
  }

  get quoteTemplate(){
    return `<div class="row text-center">
    <div class="col">
        <p>${this.content}</p>
      <div class = "author p-3">
        <p class = "p-3">${this.author}</p>
      </div>
    </div>
</div>`
  }
}