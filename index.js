//DROP DOWN MENU
const dropdownBtn = document.querySelector('#dropdown-toggle');
const dropdownMenu = document.querySelector('#dropdownNavbar');


dropdownBtn.addEventListener('mouseover', function(e){
    console.log(e.target)
    dropdownMenu.classList.remove('hidden');
});

dropdownBtn.addEventListener('mouseleave', function(){
    console.log("leave")
    dropdownMenu.classList.add('hidden');
});

dropdownMenu.addEventListener('mouseover', function(){
    dropdownMenu.classList.remove('hidden');
});

dropdownMenu.addEventListener('mouseleave', function(){
    dropdownMenu.classList.add('hidden');
});


//APPLICATION FORM
const certification = document.querySelector('#Certification-type');
const courseType = document.querySelectorAll("#course-type");


// certification.addEventListener("input", function(e){
//     let options = e.target.selectedOptions;
//     var values = Array.from(options).map(({ value }) => value);
    
 
//     courseType.forEach(course => {
//         if(course.dataset.courseType === values[0]) {
//             // console.log(course);
//             course.classList.remove('hidden');
//             course.classList.add('toggleShow');
//         }else {
//              console.log(course); 
//              course.classList.add('hidden');
//              course.classList.remove('toggleShow');
//         }
//     })
// })

/*==================== Projects tab ====================*/
const cards = document.querySelectorAll(".card");
const buttonHolder = document.querySelector(".card-btn__holder");

buttonHolder.addEventListener("click", function (e) {
  const clicked = e.target.dataset.type;



    if (!clicked) return;
    
    cards.forEach((el) =>  
        {if(clicked !== el) {el.classList.add("hidden")}}
    );

//   if (clicked === "all") {
//     cards.forEach((el) => el.classList.add("card_active"));
//   }
  console.log(clicked)

  document
    .querySelectorAll(`.card__type--${clicked}`)
    .forEach((el) => el.classList.remove("hidden"));
});