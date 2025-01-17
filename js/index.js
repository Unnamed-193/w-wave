// Якори
const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors){
  anchor.addEventListener('click', function(event){
    event.preventDefault();
   
    const blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// const header = document.querySelector('.header');
// const hero = document.querySelector('.hero').clientHeight;

// document.addEventListener('scroll', () => {
//     const scroll = window.scrollY;

//   if(scroll >= hero){
//     header.classList.add('fixed');
    
 
//   } else{
//     header.classList.remove('fixed');
   
//   }
// })
