function generateTasks(objSlug = "Acquire-High-Paying-Clients") {
  const today = new Date();
  const tasks = [];
  const clientsName = objSlug.trim().replace(/-+/g, "-").replace(/-/g, " ");

  for (let i = 0; i < 5; i++) {
    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + (i + 1) * 2);

    tasks.push({
      taskId: `OBJ-${today.getFullYear()}-999-T${String(i + 1).padStart(2, "0")}`,
      title: `${clientsName}`,
      dueDate: dueDate.toISOString().split("T")[0]
    });
  }

  return tasks;
}

module.exports = { generateTasks };
