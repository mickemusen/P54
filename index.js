// Used AI to help with slug, a concept that i've not been familiar with before.

function generateTasks(objSlug = "Acquire-High-Paying-Clients") { //definierar funktionen generateTasks
  const today = new Date(); // skapar ett objekt för dagens datum
  const tasks = []; // skapar en tom array för att lagra tasks
  const clientsName = objSlug.trim().replace(/-+/g, "-").replace(/-/g, " "); // tar bort extra bindestreck och ersätter bindestreck med mellanslag

  for (let i = 0; i < 5; i++) {
    const dueDate = new Date(today);
    dueDate.setDate(dueDate.getDate() + (i + 1) * 2); // lägger till förfallodatum + (i + 1) * 2 dagar

    tasks.push({
      taskId: `OBJ-${today.getFullYear()}-999-T${String(i + 1).padStart(2, "0")}`,
      title: `${clientsName}`,
      dueDate: dueDate.toISOString().split("T")[0]
    });
  }
/*const result = JSON.stringify(tasks, null, 2);
  Logger.log(result);*/
  return tasks;
}

module.exports = { generateTasks };
