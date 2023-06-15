/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved !!");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved !!");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved !!");
    }, 3000);
  });
}

function calculateTime() {
  const start = new Date();
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then((result) => {
      console.log("All promises resolved", result);
      const end = new Date();
      console.log(`It took ` + (end - start) / 1000 + ` seconds`);
    })
    .catch((error) => {
      console.error("Error in the flow:", error);
      const end = new Date();
      console.log(`It took ` + (end - start) / 1000 + ` seconds`);
    });
}

calculateTime();
