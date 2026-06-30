
// CT Logos Website JavaScript
// Creativity That Talks


document.addEventListener("DOMContentLoaded", function(){


const cards = document.querySelectorAll(
".card, .price-card"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";


}


});


},


{

threshold:0.2

}


);





cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(40px)";


card.style.transition=
"0.6s ease";


observer.observe(card);


});





console.log(
"CT Logos Website Loaded - Creativity That Talks"
);



});