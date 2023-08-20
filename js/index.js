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


//get all required input you need to work with and assign a vairable to them
let name = document.getElementById('username');
let getBtn =  document.getElementById('submitBtn');
let errMsg =  document.querySelector('.errorMsg');

form.addEventListener('submit', processForm);

function validateForm() {
    // check if input is empty 
    if(name.value.length === 0){
        errMsg.style.color = 'red';
        errMsg.innerHTML= '<i> name is required </i>';
        return false;
    }

    return true;
}

function processForm(e){
    e.preventDefault(); //prevent defautl browser behaviour

    //validate form input
    if(validateForm()){
        // if true process form
        getBtn.innerText = 'submitting...';
    }
}

