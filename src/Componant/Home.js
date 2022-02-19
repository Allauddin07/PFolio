import React from 'react'
import About from './About'
import Contact from './Contact'
import Education from './Education'
import Skill from './Skill'
import ali from '../images/Ali.png'

import Typed from 'react-typed'
import { HashLink as Link } from 'react-router-hash-link'

import Navigation from './Navigation'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'

export default function Home() {
    useEffect(() => {
        Aos.init({
            offset:300,
            duration: 1000,
        });
    }, [])
    const [status, setStatus] = useState('close');
    return (
        <>



            <div className={status === 'open' ? "sidebar" : " vertical-nav"} >

                <div className='d-flex justify-content-end'>
                    <div
                        className="BurgerMenu__container navbar-toggler  "
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        role="button"
                        onClick={() => setStatus(status === 'open' ? 'close ' : 'open')}
                    >
                        <i className={status}></i>
                        <i className={status}></i>
                        <i className={status}></i>
                    </div>
                </div>

                <Navigation />
            </div>

            <div className={status === 'open' ? 'content p-3 ' : "page-content p-3 d-flex flex-column"} >




                


                <div className='home '>






                    <div className='' id="home">



                    <div className='d-flex justify-content-end'>
                    <div
                        className={status === 'open' ? "burg" : "BurgerMenu__container navbar-toggler  "}
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                        role="button"
                        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
                    >
                        <i className={status}></i>
                        <i className={status}></i>
                        <i className={status}></i>
                    </div>
                </div>

 




                        <header className=" pt-5">
                            <div className="container-fluid">
                                <div className="row align-items-center tablt">

                                    <div className="col-md-6 mg">
                                        <div data-aos="zoom-out" className="    ">

                                            <h1 className="mb-4 font-weight-bold">I build
                                                <span className="web text-info pl-2">website</span><br />that build your business
                                            </h1>
                                        </div>
                                        <p className="mb-4 pb-2 ">
                                            

                                            <Typed
                                                strings={["JavaScript", " React", "Bootstrap", "SCSS", "  Redux", "Node.js", "Express.js",
                                            "Pytho", "Django", "MySQL"]}
                                                typeSpeed={30}
                                                backSpeed={60}
                                                loop />
                                        </p>

                                        <div className="mt-3 animate__animated animate__fadeInUp">

                                            <Link smooth to='#contact' className="text-center btn   btn-block  ">
                                                <i className='fas fa-user'></i> CONTACT ME</Link>

                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-3">
                                        <img src={ali} alt="tours pics" className=" pic img-thumbnail rounded-circle img-fluid" />


                                    
                                    </div>











                                </div>
                            </div>











                        </header>

                    </div>
                   
                </div>
                <About />
                <Skill />
                <Education />
                
                <Contact />

                {/* <div className='br mt-5'><About /></div>
                <div className='br mt-5'><Skill /></div>
                <div className='br mt-5'><Education /></div>
                <div className='br mt-5'><Work /></div>
                <div className='br mt-5'><Contact /></div> */}



            </div>





            {/* 
            <div className='container-fluid'>








                <div className="row">
                    <div className={status === 'open' ? ' mobile-menu  ' : " col-md-3  p-0 g-0 menu position-fixed  "}
                        id=" navbarSupportedContent" >
                        <Navigation />
                    </div>
                    <div className="col-md-9   offset-3   mobile">

                        <div className='d-flex justify-content-end'>
                            <div
                                className="BurgerMenu__container navbar-toggler "
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                role="button"
                                onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
                            >
                                <i className={status}></i>
                                <i className={status}></i>
                                <i className={status}></i>
                            </div>
                        </div>








                        <div className='row'>













                            <div className=''>


                                <div className='home' id="home">

                                    <header className="mt-5 pt-5">
                                        <div className="container">
                                            <div className="row align-items-center tablt">

                                                <div className="col-md-6 mg">
                                                    <div className="    ">

                                                        <h1 className="mb-4 font-weight-bold">I build
                                                            <span className="text-info pl-2">website</span><br />that build your business
                                                        </h1>
                                                    </div>
                                                    <p className="mb-4 pb-2 ">
                                                        Using

                                                        <Typed
                                                            strings={["JavaScript", " React", "Bootstrap", "SCSS", "  Redux", "Node.js", "Express.js"]}
                                                            typeSpeed={30}
                                                            backSpeed={60}
                                                            loop />
                                                    </p>

                                                    <div className="mt-3 animate__animated animate__fadeInUp">

                                                        <NavLink exact to='/contact' className="text-center btn   btn-block  ">
                                                            <i className='fas fa-cloud-download-alt'></i> Download CV</NavLink>

                                                    </div>
                                                </div>

                                                <div className="col-md-6 mt-3">
                                                    <img src={ali} alt="tours pics" className=" img-thumbnail rounded-circle img-fluid" />

                                                </div>




                                                <div className='br mt-5'><About /></div>
                                                <div className='br mt-5'><Skill /></div>
                                                <div className='br mt-5'><Education /></div>
                                                <div className='br mt-5'><Work /></div>
                                                <div className='br mt-5'><Contact /></div>





                                            </div>
                                        </div>











                                    </header>

                                </div>


                            </div>





                        </div>











                    </div>
                </div>
            </div> */}









            {/* <div className='home' id="home">
                
            <header className="mt-5 pt-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 mg">
                            <div className="animate__animated  animate__fadeInDown ">

                                <h1 className="mb-4 font-weight-bold">I build
                                    <span className="text-info pl-2">website</span><br />that build your business
                                </h1>
                            </div>
                            <p className="mb-4 pb-2 ">
                                Using

                                <Typed
                                    strings={["JavaScript", " React", "Bootstrap", "SCSS", "  Redux", "Node.js", "Express.js"]}
                                    typeSpeed={30}
                                    backSpeed={60}
                                    loop />
                            </p>

                            <div className="mt-3">

                                <NavLink exact to='/contact' className="text-center btn   btn-block animate__animated animate__lightSpeedInRight ">
                                <i  className='fas fa-cloud-download-alt'></i> Download CV</NavLink>

                            </div>
                        </div>

                        <div className="col-md-6 mt-3">
                            <img src={ali} alt="tours pics" className=" img-thumbnail rounded-circle img-fluid" />
                            
                        </div>

                    </div>
                </div>






                




            </header>
             
             </div>
            
            <About/>
            <Skill/>
            <Education/>
            <Work/>
            <Contact/> */}
        </>

    )
}
