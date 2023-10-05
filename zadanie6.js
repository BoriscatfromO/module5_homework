let arr = [1,2,3,4];
let check = "true"
for (let i = 0; i < arr.length-1; i = i + 1) {

   if (arr[i] !== arr[i + 1]) {
      check = "false"
   }
}
console.log(check)