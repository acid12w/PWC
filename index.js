const certification = document.querySelector('#Certification-type');
const courseType = document.querySelectorAll("#course-type");


certification.addEventListener("input", function(e){
    let options = e.target.selectedOptions;
    var values = Array.from(options).map(({ value }) => value);
    
 
    courseType.forEach(course => {
        if(course.dataset.courseType === values[0]) {
            // console.log(course);
            course.classList.remove('hidden');
            course.classList.add('toggleShow');
        }else {
             console.log(course); 
             course.classList.add('hidden');
             course.classList.remove('toggleShow');
        }
    })
})