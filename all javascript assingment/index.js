// let button = document.getElementsByClassName('arrow');
// let img = document.querySelectorAll('.container img')
// console.log(img);

//     let myFunction1=()=>{
//         for(i=0; i<=img.length ; i++) {
//             img[i].classList.add("imgz")

//         };

//     }
//     button[0].addEventListener("click", myFunction1);
// const fin= `{
//     "name": "Eternal Flame",
//     "age": 1000000,
//     "secretIdentity": "Unknown",
//     "powers": [
//       "Immortality",
//       "Heat Immunity",
//       "Inferno",
//       "Teleportation",
//       "Interdimensional travel"
//     ]
//   }`
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

// let str =['pitam', 'wow', 'hello','hi','hi','how', 'why', 'this', 'not']
// function onlythreeWordAllow (number){
//   return number.length <= 3;
// }
// function Philindrome (str){
//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     if (newString == str){
//       return newString;
//     }
// }
// function findHi(item){

//   if(item == 'hi'){
//     return item

//   }

// }

// let newArr = str.filter(onlythreeWordAllow);
// let arr= str.filter(Philindrome)
// let narr = str.filter((item)=>{
// if(item == 'hi'){
//   return item

// }
// })
// console.log(newArr);
// console.log(arr);
// console.log(narr);

// let num =[5,10,8,9,88,2]

// function squareRoot(item){
//     let sqare = Math.sqrt(item);
//     return sqare;

// }
// let rarr = num.map(squareRoot) //(6) [2.23606797749979, 3.1622776601683795, 2.8284271247461903, 3, 9.38083151964686, 1.414213562373095
// let narr = num.map(String) //(6) ['5', '10', '8', '9', '88', '2']
// console.log(rarr);
// console.log(narr);

// let users=[
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Deniel", lastName: "Longbottom"},
//     {firstName : "Jacop", lastName: "Black"}
// ]

// let newstr= users.find(el => el.firstName === "Susan")
// console.log(newstr);
// let newstrr = users.find(el=> el.lastName[0] === "L")
// console.log(newstrr);

// function fullname (nam){
//     let fulln = nam.firstName + ' ' + nam.lastName;
// return fulln;
// }

// let newstrrr = users.map(fullname)
// console.log(newstrrr);
// 





// function getOrderInfo(callbackitem) {
//   setTimeout(() => {
//     let orderitem = "pizza";
//     document.write(`your order item is ${orderitem}</br>`);
//     callbackitem(orderitem);
//   }, 2000);
// }
// function checkIfAvailable(orderitem, callbackis) {
//   setTimeout(() => {
//     document.write(`${orderitem} is avilable </br>`);
//     callbackis(orderitem)
//   }, 2000);
// }

// function placeOrder(orderitem, callbackdone){
//     setTimeout(()=>{
//         document.write(
//             `order place for your item ${orderitem}</br>`);
//             callbackdone(orderitem);
//     },2000)
// };
// function returnSuccess(orderitem, callbacksucess) {
//     setTimeout(()=>{
//         document.write(
//             `all process success for your item ${orderitem}</br>`);
 
//         },2000)
    
// }
// function order(myfunciton){
 
//         document.write(`open zomato`)
//         getOrderInfo((orderitem)=>{
//             checkIfAvailable(orderitem,(orderitem)=>{
//                 placeOrder(orderitem,(orderitem)=>{
//                     returnSuccess(orderitem,(orderitem)=>{
//                         myfunciton(orderitem)
    
//                     })
//                 })
//             })
//         })
//     }
    

// order()

// function getOrderInfo(orderitem) {
//     return new Promise (function(resolve, reject){
//         setTimeout(() => {
//             let orderitem = "pizza";
//             document.write(`your order item is ${orderitem}</br>`);
//             resolve(orderitem);
//           }, 2000);

//     })
   
//   }
//   function checkIfAvailable(orderitem ) {
//     return new Promise (function(resolve, reject){
//     setTimeout(() => {
//       document.write(`${orderitem} is avilable </br>`);
//       resolve(orderitem)
//     }, 2000);
// })
//   }
  
//   function placeOrder(orderitem ){
//     return new Promise (function(resolve, reject){
//       setTimeout(()=>{
//           document.write(
//               `order place for your item ${orderitem}</br>`);
//               resolve(orderitem);
//       },2000)
//     })
//   };
//   function returnSuccess( orderitem) {
//     return new Promise (function(resolve, reject){

//       setTimeout(()=>{
//           document.write(
//               `all process success for your item ${orderitem}</br>`);
//    resolve(orderitem)
//           },2000)})
      
//   }



//   getOrderInfo()
//   .then(checkIfAvailable)
//   .then(placeOrder)
//   .then(returnSuccess)

// async function getOrderInfo( ) {
//     return new Promise (function(resolve, reject){
//         setTimeout(() => {
//             let orderitem = "pizza";
//             document.write(`your order item is ${orderitem}</br>`);
//             resolve(orderitem);
//           }, 2000);

//     })
   
//   }
//   async function checkIfAvailable(orderitem ) {
//     return new Promise (function(resolve, reject){
//     setTimeout(() => {
//       document.write(`${orderitem} is avilable </br>`);
//       resolve(orderitem)
//     }, 2000);
// })
//   }
  
//   async function placeOrder(orderitem ){
//     return new Promise (function(resolve, reject){
//       setTimeout(()=>{
//           document.write(
//               `order place for your item ${orderitem}</br>`);
//               resolve(orderitem);
//       },2000)
//     })
//   };
//   async function returnSuccess( orderitem) {
//     return new Promise (function(resolve, reject){

//       setTimeout(()=>{
//           document.write(
//               `all process success for your item ${orderitem}</br>`);
//    resolve(orderitem)
//           },2000)})
      
//   }




// async function checkorder (){
//    const getorder = await getOrderInfo();
//     const ifavailable = await checkIfAvailable(getorder);
//    const porder = await placeOrder(ifavailable);
//    const done = await returnSuccess(porder);
//    return document.write('all done');
// }
// checkorder()\

async function getUserInfo (userinfo ){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let userinfo='manish@gmail.com'
            console.log(`get the user details ${userinfo}`);
            resolve(userinfo)
        },3000)
    })
   
}
async function checkifAlreadyPresent(userinfo){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(userinfo !== 'manish@gmail.com'){
                console.log(`this user ${userinfo}details not enter before`);
                resolve(userinfo)
            }else{
                console.log(
                    'this details already have'
                );
            }
    
            
        },3000)
    })
   
}

async function createAccount(userinfo){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(`account create for ${userinfo}`);
            resolve(userinfo);
        },3000)
    })
  

}
async function sendSingUpEmail(userinfo){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(`singup email send sucessfully to your email ${userinfo}`);
            resolve(userinfo);
        },3000)
    })
  
}
async function returnSuccess(userinfo){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('account cerate sucessfully');
            console.log(`welcome 4${userinfo}`);
        },3000)
    })
   
}
// getUserInfo()
// checkifAlreadyPresent()
// createAccount()
// sendSingUpEmail()
// returnSuccess()

// function singupprocess(){
//     getUserInfo((userinfo)=>{
//         checkifAlreadyPresent(userinfo,(userinfo)=>{
//             createAccount(userinfo,(userinfo)=>{
//                 sendSingUpEmail(userinfo,(userinfo)=>{
//                     returnSuccess(userinfo)
//                 })

//             })
//         })

//     })


// }
// 
// function singupprocess (){
//     getUserInfo()
//     .then(checkifAlreadyPresent)
//     .then(createAccount)
//     .then(sendSingUpEmail)
//     .then(returnSuccess)
// }
// singupprocess()
async function singupprocess(){
    let user = await getUserInfo();
    let checkuser = await checkifAlreadyPresent(user);
    let  cerateacc = await createAccount(checkuser);
    let send = await sendSingUpEmail(cerateacc);
    let rSuccess = await returnSuccess(send);
}
singupprocess()