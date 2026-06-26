//! Sum all transactions per user
/* let usersArr = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "B", amount: 500 },
  { user: "C", amount: 800 },
];

function sumTransaction(arrOfObj) {
  return arrOfObj.reduce((accu, curr) => {
    accu[curr.user] = (accu[curr.user] || 0) + curr.amount;
    return accu;
  }, {});
}

console.log(sumTransaction(usersArr)); */

//! Transform API response to object (id → name)
/* let userData = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function transformApi(arrOfObj) {
  return arrOfObj.reduce((accu, curr) => {
    accu[curr.id] = curr.name;
    return accu;
  }, {});
}

console.log(transformApi(userData)); */

//! Remove falsy values from object
// const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
// let dataObj = { a: 0, b: null, c: "hello", d: undefined, e: 5 };

//* 1
/* function removeFalsyValues(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (!falsyValues.includes(val)) {
      newObj[key] = val;
    }
  }
  return newObj;
}

console.log(removeFalsyValues(dataObj)); */

//* 2
/* function removeFalsyValues(obj) {
  const result = {};

  for (const key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log(removeFalsyValues(dataObj)); */

//! Check for permissions from roles
/* let roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };

function checkRole(obj, role, action) {
  return obj[role]?.includes(action) ?? false;
}

console.log(checkRole(roles, "user", "write"));
console.log(checkRole(roles, "admin", "write"));
console.log(checkRole(roles, "guest", "read"));
 */

//! Transform array of orders into revenue per category
/* let arrOfObjShop = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
  { id: 2, category: "clothes", price: 50 },
];

function transformArr(obj) {
  return obj.reduce((accu, curr) => {
    accu[curr.category] = (accu[curr.category] || 0) + curr.price;
    return accu;
  }, {});
}

console.log(transformArr(arrOfObjShop)); */

//! Remove duplicate objects by id
/* let arrayOfObj = [

  { id: 1, name: "A", city: "Delhi" },
  { id: 2, name: "B", city: "Mumbai" },
  { id: 1, name: "A", city: "Delhi" },
  { id: 3, name: "C", city: "Bangalore" },
  { id: 4, name: "D", city: "Chennai" },
  { id: 2, name: "B", city: "Mumbai" },
  { id: 5, name: "E", city: "Pune" },
  { id: 6, name: "F", city: "Hyderabad" },
  { id: 3, name: "C", city: "Bangalore" },
  { id: 7, name: "G", city: "Kolkata" },
  { id: 8, name: "H", city: "Jaipur" },
  { id: 5, name: "E", city: "Pune" },
];

const unique = arrayOfObj.filter(
  (user, index, arr) => index === arr.findIndex((u) => u.id === user.id),
);

console.log(unique);
 */

//! Chunk object entries into groups of size
/* let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
function chunkObj(obj, size) {
  let newArr = [];
  let val = Object.entries(obj);
  for (let i = 0; i < val.length; i += size) {
    newArr.push(val.slice(i, i + size));
  }
  console.log(JSON.stringify(newArr, null, 0));
}
chunkObj(obj, 2); */

//! Find longest string among object values
/* let obj = { a: "apple", b: "banana", c: "kiwiiiii" };

function findLongestStr(obj) {
  const valuesss = Object.values(obj);
  return valuesss.reduce(
    (acc, cur) => (cur.length > acc.length ? cur : acc),
    valuesss[0],
  );
}
console.log(findLongestStr(obj)); */

//! Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language

/* let inputObj = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" },
};

function transformTranslations(inputObj) {
  const result = {};
  for (const [lang, translations] of Object.entries(inputObj)) {
    for (const [key, value] of Object.entries(translations)) {
      if (!result[key]) {
        result[key] = {};
      }
      result[key][lang] = value;
    }
  }
  return result;
}

console.log(transformTranslations(inputObj)); */

//! Build index of ids grouped by category
/* let objArr = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];

function buildIndexOfId(arr) {
  return arr.reduce((accu, curr) => {
    if (!accu[curr.category]) {
      accu[curr.category] = [];
    }
    accu[curr.category].push(curr.id);
    return accu;
  }, {});
}

let resultedObj = buildIndexOfId(objArr);
console.log(resultedObj); */

//! delete property form a nested obj
/* let nestedObj = { a: { b: { c: 1, d: 2 } } };

function deletesmth(obj, keyToDelete) {
  for (const key in obj) {
    if (key === keyToDelete) {
      delete obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      deletesmth(obj[key], keyToDelete);
    }
  }
}

deletesmth(nestedObj, "c");
console.log(JSON.stringify(nestedObj, null, 2)); */

//! Check if two objects are deeply equal(it's a good question although hard but good)

/* let obj1 = {
  a: { x: 1 },
  b: { y: 2 },
};

let obj2 = {
  a: { x: 1 },
  b: { y: 2 },
};

function checkDeepEquality(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys2.length; i++) {
    if (!keys1.includes(keys2[i])) {
      return false;
    }
  }

  for (const key in obj1) {
    if (typeof obj1[key] !== "object" && typeof obj2[key] !== "object") {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    if (
      (typeof obj1[key] === "object" && typeof obj2[key] !== "object") ||
      (typeof obj1[key] !== "object" && typeof obj2[key] === "object")
    ) {
      return false;
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!checkDeepEquality(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true;
}
console.log(checkDeepEquality(obj1, obj2));
 */

//! Deep flatten nested arrays inside object

// const objToBeFlatten = { a: [1, [2, [3, [45]]]], b: [4, [5]] };

/* function arrDeepFlatten(arr, newaarr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newaarr.push(arr[i]);
    } else {
      arrDeepFlatten(arr[i],newaarr);
    }
  }
  return newaarr;
}

function flattenNestedObjArr(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (!newObj[key]) {
      newObj[key] = [];
    }
    newObj[key] = arrDeepFlatten(val, newObj[key]);
  }
  return newObj;
}

console.log(flattenNestedObjArr(objToBeFlatten)); */

//! Find most repeated word across categories
/* const itemsByCategory = {

  fruits: [
    "apple",
    "banana",
    "orange",
    "apple",
    "mango",
    "tea",
    "coffee",
    "water",
    "apple",
  ],

  drinks: [
    "tea",
    "coffee",
    "apple",
    "tea",
    "juice",
    "water",
    "coffee",
    "tea",
    "apple",
  ],

  snacks: ["chips", "apple", "tea", "cookies", "apple", "chips", "tea"],

  desserts: ["cake", "apple", "icecream", "tea", "cake", "apple"],
};

function countMaxAppearance(obj) {
  let newArrr = [];
  const objVal = Object.values(obj);
  for (let i = 0; i < objVal.length; i++) {
    for (let j = 0; j < objVal[i].length; j++) {
      newArrr.push(objVal[i][j]);
    }
  }

  const newObjWithCounts = newArrr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});

  let highestCount = 0;
  let mostRepeatedWord = "";
  for (const [key, val] of Object.entries(newObjWithCounts)) {
    if (val > highestCount) {
      highestCount = val;
      mostRepeatedWord = key;
    }
  }
  return mostRepeatedWord;
}

console.log(countMaxAppearance(itemsByCategory));
 */

//! Find intersection of all arrays in object
/* let objOfArr = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] };

const valuesArr = Object.values(objOfArr);
const result = valuesArr[0].filter((num) =>{
  return  valuesArr.every((subArr) => subArr.includes(num))
});
console.log(result); */

//! Nested object destructuring
/* const data = {
  user: {
    profile: {
      name: "Alice",
      age: 25
    }
  }
};

const {user:{profile:{name,age}}} = data
console.log(name,age) */

//! Find top N keys by value
/* const dataObjj = { a: 10, b: 50, c: 30, d: 40 };

function findNtop(obj, n) {
  let keys = [];
  const entriesPair = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < n; i++) {
    keys.push(entriesPair[i][0]);
  }
  return keys;
}
console.log(findNtop(dataObjj, 3)); */

//! Sort array of objects by name then age
/* const personArr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];

const sortedArr = personArr.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});

console.log(sortedArr); */

//! Merge two objects (no sum, override second)
// let object1 = { a: 10, b: 20 };
// let object2 = { a: 5, c: 15 };

//* 1
/* function mergeTwoObj(obj1, obj2) {
  let newObject = {};
  for (const [key, val] of Object.entries(obj1)) {
    newObject[key] = val;
  }
  for (const [keys, val] of Object.entries(obj2)) {
    newObject[keys] = val;
  }

  return newObject;
}
console.log(mergeTwoObj(object1, object2)); */

//* 2
/* const mergedObj = {
  ...object1,
  ...object2,
};

console.log(mergedObj) */

//! Reconcile two lists (missing + extra items)
/* let expected = ["a", "b", "c","d","e"];
let actual = ["b", "c", "d","f"];
function reconcileTwoLists(expected, actual) {
  let obj = {
    missing: [],
    extra: [],
  };

  for (let i = 0; i < expected.length; i++) {
    if (!actual.includes(expected[i])) {
      obj.missing.push(expected[i]);
    }
  }
  for (let i = 0; i < actual.length; i++) {
    if (!expected.includes(actual[i])) {
      obj.extra.push(actual[i]);
    }
  }
  return obj;
}

console.log(reconcileTwoLists(expected, actual)); */

//! deep merge two nested objects
/* const obj = { a: { x: 1, y: 2, a: 5 } };
const obj1 = { a: { y: 3, z: 4 } };

function mergeNestedObj(obj1, obj2) {
  let mergedObj = {};
  mergedObj = { ...obj1 };

  for (const key in obj2) {
    if (typeof obj2[key] === "object") {
      mergedObj[key] = {
        ...mergedObj[key],
        ...obj2[key],
      };
    } else {
      mergedObj[key] = obj2[key];
    }
  }
  return mergedObj;
}
console.log(mergeNestedObj(obj, obj1)); */







