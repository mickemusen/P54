const { generateTasks } = require('./index.js');

test('generateTasks should return an array of tasks with correct structure', () => {
  const tasks = generateTasks('Acquire-High-Paying-Clients');

  expect(Array.isArray(tasks)).toBe(true);
  expect(tasks.length).toBe(5);

  tasks.forEach(task => {
    expect(task).toHaveProperty('taskId');
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('dueDate');
    expect(typeof task.taskId).toBe('string');
    expect(typeof task.title).toBe('string');
    expect(typeof task.dueDate).toBe('string');
  });
});
