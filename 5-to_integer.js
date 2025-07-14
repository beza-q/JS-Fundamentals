const arg =process.argv[2];
const num=parseInt(arg);
if(!num && num !==0){
console.log('Not a number');
} else {
console.log('My number : ' + num);
}
