const fs = require("fs");

function readFile() {
  fs.readFile(
    "C:/Workspaces/Vscode_workspaces/Week-1-assignment-with-tests/02-async-js/easy/3-read-from-file.md",
    "utf8",
    (error, data) => {
      if (error) {
        console.error("Error reading file:", error);
        return;
      }
      console.log("File content:", data);
    }
  );
}

readFile();
let sum = 0;
for (i = 0; i <= 2000000000; i++) {
  sum = sum + i;
}
console.log(sum);
