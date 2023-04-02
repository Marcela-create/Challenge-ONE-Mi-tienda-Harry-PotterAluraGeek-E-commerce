const open6= document.getElementById('open6');
const modal_container6= document.getElementById('modal_container6');
const close6= document.getElementById('close6');

open6.addEventListener('click',()=>{
    modal_container6.classList.add('show');
   
});

close6.addEventListener('click',()=>{
    modal_container6.classList.remove('show');
});