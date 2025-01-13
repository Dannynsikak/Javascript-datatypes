const arr = [];
for (let i = 2; i < 100; i += 2) {
  const promise = new Promise((resolve, reject) => {
    if (i % 2 === 0) {
      return resolve(i + 2);
    }
    return reject(-100);
  });
  arr.push(promise);
}

console.log(arr);
// Usually, beginners will await each promise object of an array which can lead to performance issues and slows down your program such as this code below.
//This code is small to notice the difference but in huge code bases dealing thousands of data, this difference can be exponential. Therefore, it is wrong to await each promise from an array of promise objects.
for (const element of arr) {
  const val = await element;
  console.log(val);
}
//Fortunately, there is a more efficient way. Using the for-await loop, you can avoid performance penalties by fully utilising the asynchronous code. Replacing the previous for loop with the code below is the correct approach.

for await (const element of arr) {
  console.log(element);
}

//You can even use the following as well by fully using the Promise methods such as Promise.all before processing the data synchronously.
Promise.all(arr).then((values) => {
    values.forEach((value) => console.log("From Promise.all," value))
}).catch((err)=> console.error(err))
