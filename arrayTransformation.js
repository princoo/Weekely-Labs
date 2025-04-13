function validateArray(arr, functionName) {
  if (!Array.isArray(arr)) {
    return `${functionName}: Expected an array, got ${typeof arr}`;
  }
  else if (arr.length === 0) {
    return `${functionName}: Expected a non-empty array`;
  }
  else if (arr.some((item) => typeof item !== "number")) {
    return `${functionName}: Expected an array of numbers`;
  }
}

function double(arr) {
  const error = validateArray(arr, "double");
  if (error) return error;
  return arr.map((item) => item * 2);
}
function filterEven(arr) {
  const error = validateArray(arr, "filterEven");
  if (error) return error;
  return arr.filter((item) => item % 2 === 0);
}
function sum(arr) {
  const error = validateArray(arr, "sum");
  if (error) return error;
  const initialValue = 0;
  return arr.reduce((acc, item) => acc + item, initialValue);
}
function average(arr) {
  const error = validateArray(arr, "average");
  if (error) return error;
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum / arr.length;
}

function deleteNth(arr, n = 1) {
  const error = validateArray(arr, "deleteNth");
  if (error) return error;
  if (n <= 0) return [];
  const count = {};
  return arr.filter((item) => {
    count[item] = (count[item] || 0) + 1;
    return count[item] <= n;
  });
}

// 4. function composition (am using the above function to perform a task)
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((val, fn) => fn(val), x);
  };
}

// 5.
function uniqueElements(arr1, arr2) {
  const error1 = validateArray(arr1, "uniqueElements");
  const error2 = validateArray(arr2, "uniqueElements");
  if (error1 || error2) return error1 || error2;
  unique1 = new Set(arr1);
  unique2 = new Set(arr2);
  return [...new Set([...unique1, ...unique2])];
}

// 6.
function sqlJoin(arr1, arr2) {
  const el1 = arr1[0] || {};
  const el2 = arr2[0] || {};
  const keys1 = Object.keys(el1);
  const keys2 = Object.keys(el2);
  const common = keys1.find((key) => keys2.includes(key));
  if (!common) return "No common key found";

  const map = {};
  for (const item of arr2) {
    map[item[common]] = item;
  }

  const result = [];
  for (const item1 of arr1) {
    const key = item1[common];
    if (map[key]) {
      result.push({ ...item1, ...map[key] });
    }
  }
  return result;
}

// 7.
function getAdults(arr) {
  return arr.filter((user) => user.age >= 18);
}
function calcAverage(arr) {
  return arr.map((user) => {
    const sum = user.score.reduce((acc, score) => acc + score, 0);
    const avgScore = sum / user.score.length || 0;
    return { ...user, avgScore };
  });
}
function sorting(arr) {
  return arr
    .map((item) => {
      const { name, avgScore } = item;
      return { name, avgScore };
    })
    .sort((a, b) => b.avgScore - a.avgScore);
}
function pipe(...fns) {
  return (val) => fns.reduce((val, fn) => fn(val), val);
}

// const arr = [1,2, 3, 4, 5];
// const data = [
//   { id: 1, name: "Alice", age: 22, score: [75, 80, 7] },
//   { id: 2, name: "Bob", age: 17, score: [60, 65, 7] },
//   { id: 3, name: "Charlie", age: 28, score: [85, 90, 95] },
// ];

// const composed = compose(sum, deleteNth, double, filterEven);
// const pipeFunc = pipe(getAdults, calcAverage, sorting);
// const result = composed(arr);
// const result2 = pipeFunc(data);
// console.log("Composed Result:", result);
// console.log("Pipe Result:", result2);


