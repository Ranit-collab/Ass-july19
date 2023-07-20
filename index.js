// Problem 1

 

let arr = [1, 2, 3, 2, 4, 3, 5, 4]
let uniqueSet = new Set(arr);
arr = Array.from(uniqueSet);
console.log(arr)

 

console.log("-------------");
// Problem 2
const arr_1 = [1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 6, 6, 6];
const elementCounts = {};
arr_1.forEach((ele) => elementCounts[ele] = (elementCounts[ele] || 0) + 1);
let res = Object.keys(elementCounts).filter((ele) => elementCounts[ele] > 3);
console.log(res);

 

console.log("-------------");
// Problem 3
n = 4;
for (let i = 1; i <= n; i++) {
  let sequence = '';
  for (let j = 1; j <= i; j++) {
    sequence += j;
    sequence += j;
  }
  console.log(sequence);
}

 

console.log("-------------");
// Problem 4
n = 987654
n = n.toString();
res = 0
for(let i=0;i<n.length;i++){
if(n[i] % 2 == 0) res = res * 10 + parseInt(n[i])
}
console.log(res)

 
console.log("-------------");
// problem 5

 

let object = [
  {
    name: "Ranit",
    usn: "ranit.sen",
    fees: "20000",
    marks: "90"
  }, {
    name: "Nithin",
    usn: "nithin.shanmugam",
    fees: "3000",
    marks: "80"
  }, {
    name: "Vijay",
    usn: "bandaru.vijaysimha",
    fees: "2000",
    marks: "99.99"
}]

 

let choose = prompt('Enter usn');
res = 0
for(let i = 0; i < object.length; i ++) {
  if(object[i].usn === choose) res = object[i].name;
}
if(res === 0) console.log("No user exist")
else console.log(res)