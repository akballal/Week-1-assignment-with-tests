const fs = require("fs");
const data = "Hello Ak";
function writeFile() {
  fs.writeFile(
    "C:/Workspaces/Vscode_workspaces/Week-1-assignment-with-tests/02-async-js/easy/4-write-to-file.md",
    data,
    "utf8",
    (error) => {
      if (error) {
        console.error("Error writing file:", error);
        return;
      }
      console.log("File has been written successfully.");
    }
  );
}

writeFile();
let sum = 0;
for (i = 0; i <= 2000000000; i++) {
  sum = sum + i;
}
console.log(sum);
