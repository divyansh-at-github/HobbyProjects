const designH2=document.querySelector('#design-h2')
const projectH2=document.querySelector('#project-h2')
const executionH2=document.querySelector('#execution-h2')
const changeablePara=document.querySelector('#changeable-para')
const changeableImg=document.querySelector('#changeable-img')

designH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 9.webp')"
   changeablePara.innerHTML="Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
   changeablePara.appendChild()

})
projectH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 10.webp')"
   changeablePara.innerHTML="Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
   changeablePara.appendChild()

})
executionH2.addEventListener('click',(e)=>{
    e.preventDefault()
   changeableImg.style.backgroundImage="url('assets/asset 11.webp')"
   changeablePara.innerHTML="We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
   changeablePara.appendChild()

})