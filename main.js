const show=document.querySelector('.btn');
const div=document.querySelector('.container');
const close=document.querySelector('#close')

show.addEventListener("click" , ()=>{
    show.classList.add('hide');
    div.classList.remove('container');
    div.classList.add("active");
})

close.addEventListener('click' , ()=>{
    div.classList.add('container');
    div.classList.remove("active");
    show.classList.remove('hide');

})