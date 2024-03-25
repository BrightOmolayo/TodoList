const TodoItem = require('./TodoItem') // Adjust the path as necessary

// eslint-disable-next-line no-undef
test('todo', () => {
  const myTodo = new TodoItem.Todo('Finish assignment', 'Complete the math assignment', '2023-04-20', 'High')
  // eslint-disable-next-line no-undef
  expect(myTodo.title).toBe('Finish assignment')
  // eslint-disable-next-line no-undef
  expect(myTodo.description).toBe('Complete the math assignment')
  // eslint-disable-next-line no-undef
  expect(myTodo.dueDate).toBe('2023-04-20')
  // eslint-disable-next-line no-undef
  expect(myTodo.priority).toBe('High')
})
