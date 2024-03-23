function Todo (title, description, dueDate, priority) {
  this.title = title
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.isComplete = false
}

Todo.prototype.toggleComplete = function () {
  this.isComplete = !this.isComplete
}
export { Todo }
// Example usage:
// const todo2 = new Todo('Workout', 'Go to the gym', '2023-04-06', 'Medium')
