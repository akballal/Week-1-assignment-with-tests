/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let hashMap = {};
  let result = [];
  transactions.forEach((element) => {
    if (element.category in hashMap) {
      hashMap[element.category] = element.price + hashMap[element.category];
    } else {
      hashMap[element.category] = element.price;
    }
  });

  Object.entries(hashMap).forEach(function ([key, value]) {
    result.push({
      category: key,
      totalSpent: value,
    });
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
