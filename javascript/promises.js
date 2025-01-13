let promise = new Promise((resolve, reject) => {
  let success = true; // manipulate this variable to test the rejection

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

/*
 * Handrolled version of setTimeOut.
 */
const customSetTimeOut = (x) =>
  new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      const erroVal = new Error("Not a number", {
        cause: "Value is not a number.",
      });
      return reject({
        erroVal,
        value: x,
      });
    } else {
      const currentTime = new Date();
      const previousSeconds = currentTime.getTime();
      const fullFilledSeconds = previousSeconds + x * 1000;

      let newTime = new Date();
      do {
        newTime = new Date();
      } while (newTime.getTime() < fullFilledSeconds + 1);
      return resolve(`Finished the ${x} seconds countdown!`);
    }
  });

customSetTimeOut(" 2")
  .then((x) => console.log(x))
  .catch((err) => {
    console.error(err);
    console.log("Attempting to convert string to a number value!");
    // if it's not a number, set the timeout to 0. This just serves as an example
    const number = Number.isNaN(err.value.trim())
      ? Number.parseInt(err.value.trim())
      : 0;
    customSetTimeOut(number); // errors won't be handled here for now
    console.log(`Conversion successful. Timeout lasted in ${number} seconds`);
  });
