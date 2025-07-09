// MOBILE NAV

const mobileNav = document.querySelector('#mobile-nav');
const navbarDropdown = document.querySelector('#navbar-dropdown');

mobileNav.addEventListener('click', function(e){
    navbarDropdown.classList.toggle('hidden');
});

gsap.to(".slide-in-up", {
    scrollTrigger:{ 
        Trigger: ".about-holder", // start animation when ".box" enters the viewport
        start: "top center",
        scrub: 1, 
        toggleAction: 'restart pause reverse pause'
    },
    y: 0,
    duration: 1.5,
    ease: "power1.out",
  });


// NAV DROP DOWN MENU
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
// const certification = document.querySelector('#Certification-type');
// const courseType = document.querySelectorAll("#course-type");


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

/*==================== DEPARTMENT TAB ====================*/
const cards = document.querySelectorAll(".card");
const buttonHolder = document.querySelector(".card-btn__holder");
const btnDep = document.querySelectorAll("#btn-dep");


const tabFunc = (buttonGroup, el, buttons)=> {

if (buttonGroup === null) return;

buttonGroup.addEventListener("click", function (e) {
    const clicked = e.target.dataset.type;
  
    if (!clicked) return;
      
      el.forEach((el) =>{ 
      console.log(el, clicked);
          {if(clicked !== el) {el.classList.add("hidden")}}}
      );
  
      buttons.forEach(el => {
          el.classList.remove("text-[#F99F02]");
         
          if(el === e.target){
              e.target.classList.remove("text-gray-700");
              e.target.classList.add("text-[#F99F02]");
          } 
      })
    
  
      document
          .querySelectorAll(`.card__type--${clicked}`)
          .forEach((el) => el.classList.remove("hidden"));
  });
}


  tabFunc(buttonHolder, cards, btnDep);
  
  
  
  window.onscroll = function() {scrollFunction()};
  
  
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // document.getElementById("navbar").style.padding = "10px 0px 0px 0px";
      document.getElementById("logo").style.height = "4em";
    } else {
      // document.getElementById("navbar").style.padding = "10px 0px 0px 0px";
      document.getElementById("logo").style.height = "6em";
    }
  }


  const slide = document.querySelector("#infinte-slide");

  gsap.set(slide, {
    x: -750,
  });

  gsap.to(slide, {
    x: 1500,
    duration: 30,
    ease: "none",
    repeat: -1,
    repeatWithPause: 0.5,
  });


  const closeAlert = document.querySelector("#close-alert");
  const alert = document.querySelector("#alert-1");

  closeAlert.addEventListener("click", function(){
    alert.style.display = "none";
  })
