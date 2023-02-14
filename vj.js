let ham=document.getElementById('hamburger');
let list=document.getElementById('hidden');
let boy=document.getElementById('boy');
console.log(list);
ham.addEventListener('click',()=>{
    list.classList.toggle('active');
    
    
})
const header=document.querySelector('#header');
// window.addEventListener('scroll',()=>{
//     if(window.scrollY >=100)
//     {
//         header.classList.add('active');
//     }
//     else{
//         header.classList.remove('active');
//     }

// })
window.addEventListener('scroll',()=>{
    console.log('hi');
    
})
