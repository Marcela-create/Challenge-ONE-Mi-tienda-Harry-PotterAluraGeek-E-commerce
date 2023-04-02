const open7= document.getElementById('open7');
const modal_container7= document.getElementById('modal_container7');
const close7= document.getElementById('close7');

open7.addEventListener('click',()=>{
    modal_container7.classList.add('show');
  
});

close7.addEventListener('click',()=>{
    modal_container7.classList.remove('show');
});