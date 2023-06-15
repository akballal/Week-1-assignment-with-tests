const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "C:/Workspaces/Vscode_workspaces/Week-1-assignment-with-tests/02-async-js/medium/test.txt",
      "utf8",
      (error, data) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data.toString());
      }
    );
  });
}

function writeFile(dataToWrite) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "C:/Workspaces/Vscode_workspaces/Week-1-assignment-with-tests/02-async-js/medium/test.txt",
      dataToWrite,
      "utf8",
      (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(dataToWrite);
      }
    );
  });
}

readFile()
  .then((fileData) => {
    console.log("File Data => " + fileData);
    const cleanedFileData = fileData.replace(/\s+/g, " ");
    console.log(cleanedFileData);

    writeFile(cleanedFileData)
      .then(() => console.log("File has been written successfully."))
      .catch((error) => console.error("Error writing file:", error));
  })
  .catch((error) => {
    console.log("Error in reading file => " + error);
  });
