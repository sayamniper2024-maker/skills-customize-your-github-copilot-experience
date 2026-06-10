const fs = require("fs");
const path = require("path");

const [assignmentId, displayName, filename, type] = process.argv.slice(2);

if (!assignmentId || !displayName || !filename || !type) {
  console.error(
    'Usage: node add-attachment.js <assignment-id> "<display-name>" <filename> <type>',
  );
  console.error(
    'Example: node add-attachment.js python-basics "Starter Code" starter-code.py python',
  );
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, "../../../../");
const configPath = path.join(repoRoot, "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const assignment = config.assignments.find((item) => item.id === assignmentId);

if (!assignment) {
  console.error(`Error: Assignment "${assignmentId}" not found in config.json`);
  process.exit(1);
}

assignment.attachments = assignment.attachments || [];
assignment.attachments.push({
  name: displayName,
  file: filename,
  type,
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Added attachment "${displayName}" to assignment "${assignmentId}"`);
