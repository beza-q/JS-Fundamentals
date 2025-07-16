const arg = process.argv[2];
const x = parseInt(arg);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else if (x > 0) {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}
// if x is 0 or negative, print nothing (no output)

