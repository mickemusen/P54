const { generateTasks } = require('../index.gs');


describe('generateTasks', () => {
  beforeEach(() => {
    Logger.log.mockClear();
  });

  test('generates 5 tasks', () => {
    const result = generateTasks();
    expect(result).toHaveLength(5);
    expect(Logger.log).toHaveBeenCalled();
  });

  test('task IDs follow correct format', () => {
    const currentYear = new Date().getFullYear();
    const result = generateTasks();
    
    expect(result[0].taskId).toMatch(/^OBJ-\d{4}-999-T\d{2}$/);
    expect(result[0].taskId).toBe(`OBJ-${currentYear}-999-T01`);
  });
});