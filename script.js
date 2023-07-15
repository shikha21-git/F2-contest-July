/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) => {
    if (value.profession === "developer") {
      console.log(value);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) => {
    if (value.profession == "developer") console.log(value);
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "Susan", age: 20, profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  function removeAdminEmployees(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].profession === "admin") {
        array.splice(i, 1);
        i--; // Decrement the index since we removed an element
      }
    }
  }
  // Call the function to remove admin employees
  removeAdminEmployees(arr);
  // Console.log the changed array
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 4, name: "Shweta", age: 23, profession: "Engineer" },
    { id: 5, name: "Shilpa", age: 22, profession: "developer" },
    { id: 6, name: "Rahul", age: 24, profession: "developer" },

  ];
  let mergedArray = arr.concat(newArray);
  console.log(mergedArray);
}
