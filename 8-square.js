const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  let row = 0;
  while (row < size) {
    console.log('X'.repeat(size));
    row++;
  }
}
// If size is 0 or negative, print nothing
