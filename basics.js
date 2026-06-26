/*
██████╗  █████╗ ███████╗██╗ ██████╗███████╗
██╔══██╗██╔══██╗██╔════╝██║██╔════╝██╔════╝
██████╔╝███████║███████╗██║██║     ███████╗
██╔══██╗██╔══██║╚════██║██║██║     ╚════██║
██████╔╝██║  ██║███████║██║╚██████╗███████║
╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚══════╝
*/

//! groupPeopleByCity
/* let arrObj = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
  { name: "D", city: "Bangalore" },
  { name: "E", city: "Chennai" },
  { name: "F", city: "Mumbai" },
  { name: "G", city: "Pune" },
  { name: "H", city: "Delhi" },
  { name: "I", city: "Hyderabad" },
  { name: "K", city: "Pune" },
  { name: "L", city: "Chennai" },
  { name: "M", city: "Bangalore" },
  { name: "N", city: "Hyderabad" },
];

function groupPeopleByCity(arr) {
  return arr.reduce((accu, curr) => {
    if (!accu[curr.city]) {
      accu[curr.city] = [];
    }
    accu[curr.city].push(curr.name);
    return accu
  }, {});
}

console.log(groupPeopleByCity(arrObj));
 */

//! filter objects ?
/* let obj = { a: 20, b: 60, c: 40, d: 90 };
function filterObj(obj) {
    let newObj = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value > 50) {
            newObj[key] = value;
            }
        }
        console.log(newObj);

  //!2
  let filteredObj = Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => val > 50),
  );
  console.log(filteredObj);
}

filterObj(obj); */

//! find the student with highest avg marks
/* let obj = { A: [80, 90, 50], B: [70, 95, 85]};

function highestNumsAvg(obj) {
  let highestKeyAvg;
  let highestAvgNum = 0;

  for (const [key, val] of Object.entries(obj)) {
    let reducedVal = val.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    let avg = reducedVal / val.length;
    if (highestAvgNum < avg) {
      highestAvgNum = avg;
      highestKeyAvg = key;
    }
  }
  console.log(highestKeyAvg);
}
highestNumsAvg(obj);
 */

//! Unique values across all object arrays
/* let obj = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
function uniqueArrVal(obj) {
  let set = new Set();
  Object.values(obj).forEach((valueArr) => {
    valueArr.forEach((elem) => {
      set.add(elem);
    });
  });
  return Array.from(set);
}

console.log(uniqueArrVal(obj)); */

//! Pick only given keys from object
/* let obj = { name: "Rahul", age: 23, city: "Noida" };
let keysArr = ["name", "city"];

function onlyGivenKeys(obj, keysArr) {
  let keysSet = new Set(keysArr);
  let filteredObj = Object.fromEntries(
    Object.entries(obj).filter(([key, val]) => keysSet.has(key)),
  );
  return filteredObj;
}

console.log(onlyGivenKeys(obj, keysArr)); */

//! Count number of keys in object
/* function countKeys(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
  }
  return count
}

let obj = { a: 1, b: 2, c: 3 };
console.log(countKeys(obj)) */

//! Capitalize string values inside object
/* function capitalizeVal(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    newObj[key] = val[0].toUpperCase() + val.slice(1)
  }
  return newObj
}

let obj = { name: "alice", city: "delhi" };
console.log(capitalizeVal(obj)); */

//! Convert object to query string
/* let obj = {
  name: "Alice",
  age: 25,
  city: "New York",
  country: "USA",
  profession: "Software Engineer",
  salary: 95000,
  married: false,
  email: "alice@example.com",
  phone: "123-456-7890",
  isActive: true,
  experience: 3,
  department: "Engineering",
  manager: "John Smith",
  hobbies: ["Reading", "Hiking", "Photography"].join("-"),
};

function ConvertObjToQueryStr(obj) {
  let newArr = [];
  for (const [key, value] of Object.entries(obj)) {
    newArr.push(`${key}=${value}`);
  }
  return newArr.join("&");
}
console.log(ConvertObjToQueryStr(obj)); */

//! Count even and odd numbers in array
/* let arr = [1, 2, 3, 4, 5, 6];

function countEvenOdd(arr) {
  let evenCoutn = 0;
  let oddCoutn = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCoutn++;
    } else {
      evenCoutn++;
    }
  }
  return {
    even: evenCoutn,
    odd: oddCoutn,
  };
}

console.log(countEvenOdd(arr)); */

//! Find common keys between two objects
/* function findCommonKeys(obj, obj1) {
  let arr = [];
  for (const key of Object.keys(obj)) {
    if (key in obj1) {
      arr.push(key);
    }
  }
  return arr;
}

console.log(findCommonKeys({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 })); */

//! Convert array of objects to lookup by id
/* let arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

function convertArr(arr) {
  let newObj = {};
  for (const obj of arr) {
    newObj[obj.id] = obj;
  }
  return newObj;
}

console.log(convertArr(arr)); */

//! Check if all values in object are numbers
/* function checkTypeOfValue(obj) {
  let result = true;
  let values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "number") {
      result = false;
    }
  }
  return result;
}
let obj = { a: 1, b: 3, c: 3 };
console.log(checkTypeOfValue(obj)); */
