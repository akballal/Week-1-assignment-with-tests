/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

  waitOneSecond()
    .then((result) => {
      console.log(result);
      waitTwoSecond()
        .then((result) => {
          console.log(result);
          waitThreeSecond()
            .then((result) => {
              console.log(result);
              const end = new Date();
              console.log(`It took ` + (end - start) / 1000 + ` seconds`);
            })
            .catch((error) => {
              console.log("Error in promise 3", error);
            });
        })
        .catch((error) => {
          console.log("Error in promise 2", error);
        });
    })
    .catch((error) => {
      console.log("Error in promise 1", error);
    });
}
calculateTime()