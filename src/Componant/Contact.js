import React, { useEffect } from 'react'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import swal from 'sweetalert';
import Aos from 'aos'
import "aos/dist/aos.css"



function Contact() {
  useEffect(()=>{
    Aos.init({
        offset:250,
        duration:1000,
      });
}, [])

  const [state, setState] = useState({
    name:'',
    email:'',
    message:''
  })
  

  const handleChange =(e)=>{
    setState({[e.target.name]:e.target.value})

  }
  function sendEmail(e) {
      e.preventDefault();

      

      emailjs.sendForm('service_q3jgclo', 'template_8bglvdi', '.contact_form_class', 'user_Cla8FYjgCiYtqsVxnDR1c')
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })

      swal({
        title: "Good job!",
        text: "You message has been sent successfully!",
        icon: "success",
        button: "OK!",
      });



          setState({name:"",
        email:"",
      message:""})
  }

  return (
    <div className='contact mt-5' id='contact'>




      <div className="container">
        <div className='text-center'><h3 className='em'>CONTACT ME</h3></div>
        <div className="row mt-5 ">
          <div data-aos="fade-up" className="col-md-6">
            <div className="ite mb-5  d-flex">


              <div className='text-center my-auto'>
                <span className='location'><i class="fa-solid fa-location-dot"></i></span>

              </div>
              <div className=''>
                <h3 className='em wh'>Address</h3>
                <h3>141 Stoddard Road Mount Roskill</h3>
                <h3>Auckland  New Zealand</h3>
              </div>


            </div>
            <div className="ite mb-5 d-flex">
              <span className="location"><i class="fa-solid fa-phone"></i></span>
              <div>
                <h3 className='em wh'>Phone</h3>
                <h3>0225165668</h3>
              </div>
            </div>
            <div className="ite mb-5 d-flex">
              <span className="location"><i class="fa-solid fa-envelope"></i></span>
              <div className='email'>
                <h3 className='em wh'>Email</h3>
                <h3>allauddinansari717@gmail.com</h3>
              </div>
            </div>
          </div>
          <div  className="col-md-6">


            <form onSubmit={sendEmail} className='contact_form_class'>
              <div class="form-group mb-5">
              
                <input type="text" name="name" className="" id="name" value={state.name} onChange={handleChange}  required  />
                <label for="exampleInputEmail1">Name</label>
              </div>
              <div class="form-group mb-5">
              
                <input type="text" name="email"  id="exampleInputEmail1" value={state.email} onChange={handleChange}  required />
                <label for="exampleInputEmail1">Email address</label>
              </div>

              <div className="form-group mb-5">
              
                <textarea class="" id="exampleFormControlTextarea1" value={state.message} name='message' onChange={handleChange} required rows="5"></textarea>
                <label for="exampleFormControlTextarea1">Message</label>

              </div>
              <button type='submit' className=' send mb-4 '> Send Message</button>
            </form>
          </div>
        </div>
      </div>


    </div >


  )
}

export default Contact