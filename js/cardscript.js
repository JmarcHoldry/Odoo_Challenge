//Movement Animation 
const card = document.querySelector('.hero__card');
const container = document.querySelector('.hero__box');


//Moving Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth/2-e.pageX) / 65;
    let yAxis = (window.innerHeight/2-e.pageY) / 65;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';


});




//Animate Out

 container.addEventListener('mouseleave',(e)=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

 });