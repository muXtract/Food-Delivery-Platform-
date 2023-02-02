let ham=document.getElementById('hamburger');
let navList=document.getElementById('hidden');
console.log(navList);
ham.addEventListener('click',()=>{
    navList.classList.replace('hidden','block');
    
})
