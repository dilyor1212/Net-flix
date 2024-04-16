const reges = document.querySelector('.regestration')
const butt = document.querySelector('.butt')
const regExName = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExNumber = /^[0-9]{9,9}$/

const email = "example@example.com";
const list = document.querySelector('h1')
const text = document.querySelector('.text')
const password = document.querySelector('.password')
const form = document.querySelector('form')
const button = document.querySelector('button')
const kil = document.querySelector('.kil')
const lit = document.querySelector('.lit')


text.addEventListener('click', () =>{
    kil.classList.add('grid')
   setTimeout(() => {
     kil.classList.remove('grid')
   }, 4000);
})


password.addEventListener('click', () =>{
    lit.classList.add('grid')
   setTimeout(() => {
     lit.classList.remove('grid')
   }, 4000);
})




text.addEventListener('keyup', ()=> {
    if(regExName.test(email)) {
        text.style.border = '3px solid green'
    }else { 
        text.style.border = '2px solid red'
    }
} )
password.addEventListener('keyup', ()=> {
    if(regExNumber.test(password.value)) {
        password.style.border = '3px solid green'
    }else {
         password.style.border = '3px solid red'
    }
} );


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    if(regExName.test(email) && regExNumber.test(password.value) ) {
    document.location='netflix.html'
        
    }else {
        
    }
})



 
