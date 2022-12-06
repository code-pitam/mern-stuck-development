// let button = document.getElementsByClassName('arrow');
// let img = document.querySelectorAll('.container img')
// console.log(img);


//     let myFunction1=()=>{
//         for(i=0; i<=img.length ; i++) {
//             img[i].classList.add("imgz")

//         };



        

        
//     }
//     button[0].addEventListener("click", myFunction1);
const fin= `{
    "name": "Eternal Flame",
    "age": 1000000,
    "secretIdentity": "Unknown",
    "powers": [
      "Immortality",
      "Heat Immunity",
      "Inferno",
      "Teleportation",
      "Interdimensional travel"
    ]
  }`
//   const myf= JSON.parse(fin)
//   console.log(myf);
//   console.log(myf.powers[0]);

//   /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target){
//   for(let i = 0; i < nums.length; i++){
// for(let j = 1; j < nums.length; j++){
// if(nums[i] + nums[j] == target){
//   if(i !== j){
//     return [i, j];
//   }
// }
// }
// }
// }


// let myn= [2,4,3]
// let mym=[5,6,4]

// let result = function(num1 , num2){
//   const vn =myn.reverse().map(String)
// const ln = mym.reverse().map(String)
// let newn= vn.join("");
// console.log(newn);
// let newm= ln.join("");
// console.log(newm);


// let mainNumber= +newn + +newm;
// console.log(mainNumber);
// let myfinc = num => Number(num);

// let final = Array.from(String(mainNumber), myfinc)
// console.log(final);
// function linkedList(arr){
//   return arr.reduceRight((next, value) => ({value, next}), null);
// }
// console.log(linkedList(final));
// } 
// result(myn, mym)

// // let nmy = vn[0]+vn[1]+vn[2]
// // console.log(nmy);






// let number = [1,1,1,2,3,4]
// var numfuc = function(arr){
// var count = {};
// number.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(number);
// let newarr= Object.values(count)
//   console.log(newarr);
//   function hasDuplicates(array) {
//     var valuesSoFar = Object.create(null);
//     for (var i = 0; i < array.length; ++i) {
//         var value = array[i];
//         if (value in valuesSoFar) {
//             return true;
//         }
//         valuesSoFar[value] = true;
//     }
//     return false;
// };

  
// //   function hasDuplicates(array) {
// //     return (new Set(array)).size !== array.length;
// // }
// let item = hasDuplicates(newarr);
// console.log(item);
// if (item == true){
//   return false;

// }else {
// return true;
// }
// }




// //   const allEqual = narr => narr.every(val => val === narr[0])
// //   let final = allEqual(newarr)
// //   console.log(final);

// // 
// console.log(numfuc(number
//   ));

// class car{
//   constructor(name, wheels, isDeisel){

//     this.name = name
//     this.wheels = wheels;
//     this.isDeisel = isDeisel;
    
//   }

// }

// let splender = new car('2 wheels','no')
// let thar = new car('4 wheels', 'yes')
// console.log(splender);

// const obj = JSON.stringify(thar)
// console.log(obj);
// const newobj = JSON.parse(obj)
// console.log(newobj);


let str =['pitam', 'wow', 'hello','hi','hi','how', 'why', 'this', 'not']
function onlythreeWordAllow (number){
  return number.length <= 3;
}
function Philindrome (str){
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if (newString == str){
      return newString;
    }
}
function findHi(item){

  if(item == 'hi'){
    return item
  
  }
  
}





let newArr = str.filter(onlythreeWordAllow);
let arr= str.filter(Philindrome)
let narr = str.filter((item)=>{
if(item == 'hi'){
  return item

}
})
console.log(newArr);
console.log(arr);
console.log(narr);