// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('.box');
// let screenValue = '';
// for (item of buttons){
//     item.addEventListener('click',(e) => {
//         buttonText = e.target.innerText; 
             

//         if (buttonText == 'X') {
//             buttonText= '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//            screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })

// }


// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('.box');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.box');
console.log(buttons); 
let screenValue ='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
   buttonText= e.target.innerText;
   console.log(buttonText);
if(buttonText == '='){
   screen.value= eval(screenValue)
    
}else if(buttonText=='C'){
    screenValue = '',
    screen.value = screenValue;
}else if (buttonText == 'X'){
    buttonText = '*';
    screenValue += buttonText;
    screen.value = screenValue;

}else{
   screenValue += buttonText;
   screen.value = screenValue;
}
    })
   

}

// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('.box');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

