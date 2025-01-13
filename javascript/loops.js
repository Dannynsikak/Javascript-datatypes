const MAX = 10;
for (let i = 0; i < MAX; i++) {
  console.log(i);
}

let d = 0;
while (d < MAX) {
  console.log(d);
  d++;
}

d = 0;
do {
  console.log(d);
  d++;
} while (d < MAX);

const arr = [1, 2, 3, 4];
for (const key in arr) {
  console.log(key, arr[key]);
}

for (const val of arr) {
  console.log(val);
}

arr.forEach((x) => console.log(x));
