import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


function Skill() {

  useEffect(()=>{
    Aos.init({
        offset:300,
        duration:1000,
      });
}, [])


  return (
    <div className='skill' id='skill'>
      <div className=' about d-flex flex-column justify-content-center ' id="about">
        <div><h3 className=' mt-5 abtme nav-link'>My speciality</h3></div>
        <div><h3 className=' mt-4 wh' >My Skill</h3>
        </div>

        <div className='container mt-5'>



         <div className="row">
           <div className="col-md-4">
             <div data-aos="fade-left" className="item skill-d htm  d-flex  flex-column align-items-center">
               <h3 className=' mb-5  wh' >100%</h3>
           
           <h3 className='mt-2 wh'>HTML5/CSS</h3>
           
           
           <h3 className='mt-2 wh'>SCSS/Bootstrap</h3>
           
           </div></div>
           <div className="col-md-4"><div data-aos="fade-left" className="item skill-d react  d-flex flex-column align-items-center"><h3 className=' mb-5  wh' >90%</h3>
           
           <h3 className='mt-2 wh'>React/Redux</h3></div></div>
           <div className="col-md-4"><div data-aos="fade-left" className="item skill-d java d-flex flex-column align-items-center"><h3 className='  mb-5 wh' >95%</h3>
           
           <h3 className='mt-2 wh'>JavaScript.JS</h3></div></div>
         </div>
         <div className="row">
           <div className="col-md-4"><div data-aos="fade-right" className="item skill-d express d-flex flex-column align-items-center"><h3 className=' mb-5  wh' >95%</h3>
           
           <h3 className='mt-2 wh'>Express.JS</h3></div></div>
           <div className="col-md-4"><div data-aos="fade-right" className="item skill-d python  d-flex flex-column align-items-center"><h3 className='  mb-5 wh' >90%</h3>
           
           <h3 className='mt-2 wh'>Pytho</h3></div></div>
           <div className="col-md-4"><div data-aos="fade-right" className="item skill-d django react d-flex flex-column align-items-center"><h3 className='  mb-5 wh' >95%</h3>
           
           <h3 className='mt-2 wh'> Django</h3></div></div>
         </div>

         <div className="row">
           <div className="col-md-4"><div data-aos="fade-left" className="item skill-d ract sql d-flex flex-column align-items-center"><h3 className='  mb-5 wh' >90%</h3>
           
           <h3 className='mt-2  wh'>SQL/MySQL</h3></div></div>
           <div className="col-md-4"><div data-aos="fade-left" className="item skill-d react mongo d-flex flex-column align-items-center"><h3 className=' mb-5  wh' >80%</h3>
           
           <h3 className='mt-2 wh'>MongoDB</h3></div></div>
           <div className="col-md-4"><div data-aos="fade-left" className="item skill-d git express d-flex flex-column align-items-center"><h3 className=' mb-5  wh' >90%</h3>
           
           <h3 className='mt-2 wh'>GitHub/git</h3></div></div>
         </div>
          

           







          </div>


            
          </div>

        </div>
      



    
  )
}

export default Skill