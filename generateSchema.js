const fs = require('fs');
const { generateTasks } = require('./index.js');

const tasks = generateTasks(); // Use default parameter or pass your own slug

// Convert the tasks array to JSON string with indentation for readability
const json = JSON.stringify(tasks, null, 2);

// Write to schema.json file
fs.writeFileSync('schema.json', json);

console.log('Sample schema.json file created!');
