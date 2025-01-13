let promise = new Promise(function (resolve, reject) {
  let success = true; // manipulate this variable to test the rejection

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
