import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function About() {
    useEffect(()=>{
        Aos.init({
            offset:300,
            duration:1000,
          });
    }, [])
    return (
        <div className='  about d-flex flex-column justify-content-center  ' id="about">
            <div><h3 className=' mt-5 abtme nav-link'>About me</h3></div>
            <div><h3 className=' ml-1 mt-4 wh' >Who am I ?</h3>
            
            
            </div>
            <div data-aos="fade-up"  className='align-self-center text-center mt-3'> <p className='para'>  I am <strong>Allauddin</strong> I have recently finished my graduation with bachler degree in computer science.
                I am full stack webdeveloper. Technology I use is MERN(MongoDB, Express, ReactJS, and NodeJS).
                I create responsive website that are displayed on all devices desktop and smartphones.
                Of course, before developing any webapp, Landing Page, Business Website, I need to have a ready-made project
                layout(sketch). and I am ready to do this for you,
            </p>
            </div>

            <div className="container-fluid">



            <div className='row pj flex-wrap justify-content-betweenn mt-5 g-sm-2  '>
                <div   className="col-md-3 col-sm-6  " >
                    <div data-aos="zoom-out" className="item htm  d-flex flex-column align-items-center">
                        <h3 className='mt-3'><i className='fas fa-lightbulb'></i></h3>
                        <h3 className='mt-5'>Application Design</h3>
                    </div>
                </div>

                <div  className=" col-md-3 col-sm-6 " >
               
                    <div data-aos="zoom-out" className="item express   d-flex flex-column align-items-center">
                    <h3 className='mt-3'><i className='fas fa-mobile'></i></h3>
                    <h3 className='mt-5'>Mobile Software</h3>
                    </div>
                </div>
                <div  className=" col-md-3  col-sm-6 " >

                    <div data-aos="zoom-out" className="item java d-flex flex-column align-items-center">
                        <h3 className='mt-3'><i className='fas fa-database'></i></h3>
                    <h3 className='mt-5'>Database Design</h3>

                    </div>
                </div>

                <div  className=" col-md-3  col-sm-16 " >
                    
                    <div data-aos="zoom-out" className="item react d-flex flex-column align-items-center">
                        <h3 className='mt-3'><i className='fas fa-server'></i></h3>
                    <h3 className='mt-5'>Web Application</h3>
                    </div>
                </div>
            </div>

            </div>

            


        </div>
    )
}
