// let getBtn =  document.getElementById('submitBtn');

// //1st method
// // function click() {
   
// // }

// let click = function(){
//     console.log('hello')
//     alert('you just clicked a button')
// }

// //2nd method
// // console.log(getBtn);
// getBtn.addEventListener('click',() => {
//     console.log('hello')
//     alert('you just clicked a button')
// });

// let form = document.querySelector('#form');
// let display = document.querySelector('#display');

// form.addEventListener('mouseover', () => {
//     display.style.color = 'red';
//     display.innerText = 'your mouse is up';
// })

// form.addEventListener('mouseup', () => {
//     display.innerText = '';
// })

let name = document.getElementById('username');
let getBtn =  document.getElementById('submitBtn');
let errMsg =  document.querySelector('.errorMsg');

form.addEventListener('submit', processForm);

function validateForm() {

    if(name.value.length === 0){
        errMsg.style.color = 'red';
        errMsg.innerHTML= '<i> name is required </i>';
        return false;
    }

    return true;
}

function processForm(e){
    e.preventDefault();
    if(validateForm()){
        getBtn.innerText = 'submitting...';
    }
}

