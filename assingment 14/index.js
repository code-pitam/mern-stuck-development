// let eng = prompt("your english marks");
// let math = prompt("your math marks")
// let science = prompt("your science marks")
// let allsubstr = [eng, math, science]

// let allsubnum = allsubstr.map(str =>{
//     return Number(str);
// })

// console.log(allsubnum);
// let avg=(sub)=>{
//     return sub[0] + sub[1]+sub[2];
// };


// alert('you get '+avg(allsubnum)/allsubnum.length + ' %'+ ' 85number');

let str= prompt("enter a word i can sortpi this to alphabatically order");
let astr = str.split('');
astr.sort();
 let nstr= astr.join('');
alert("The result is "+ "'"+ nstr+"'")