// Creation of promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// Consumption of promise
promiseOne.then(function () {
  console.log("Promise consumed");
});

// Second Promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

//Three Promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Suraj", email: "ersuraj6613@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
  console.log(user.email);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Suraj", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Amit", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// //Async await method
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E: ',error);
//   }
// }

// getAllUsers();

fetch('https://api.github.com/users/surajch6613').then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> console.log(error))
