import React from 'react'
import img from '../images/Ali.png'
import { HashLink as Link } from 'react-router-hash-link'
import facebook from '../images/fb.png'
import instagram from '../images/instajpg.jpg'
import linkedin from '../images/link.png'
import github from '../images/github.png'


export default function Navigation() {
    return (
        <div className='   sidebar1' >



            <div className="card-block text-center text-black mt-5">

                <img className="img-thumbnail rounded-circle  img1" src={img} alt="" />
                <div className='d-flex justify-content-center'>
                    <div className='icon'>
                        <Link className="icn" smooth to="">
                            <img className="img-thumbnail rounded-circle  " src={facebook} alt="" />
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link className=""smooth to="">
                            <img className="img-thumbnail rounded-circle  " src={instagram} alt="" />
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link className="" smooth to="">
                            <img className="img-thumbnail rounded-circle " src={linkedin} alt="" />
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link className=""smooth to="">
                            <img className="img-thumbnail rounded-circle  " src={github} alt="" />
                        </Link>
                    </div>

                </div>




                <h2 className="font-weight-bold mt-4">Allauddin</h2>
                <h3 className="font-weight-bold mt-2"> Full Stack Developer</h3>
                <div className='d-flex justify-content-center flex-column'>
                    <div className="align-self-center"><Link className="nav-link" smooth to="#home">Home</Link></div>
                    <div className="align-self-center"><Link className="nav-link "smooth to="#about">About</Link></div>
                    <div className="align-self-center"> <Link className="nav-link"smooth to="#skill"> Skill</Link></div>
                    <div className="align-self-center"><Link className="nav-link" smooth to="#education">Education</Link></div>
                    {/* <div className="align-self-center"><Link className="nav-link" smooth to="#work">Work</Link></div> */}
                    <div className="align-self-center"> <Link className="nav-link" smooth to="#contact">Contact</Link>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <div>
                        <span>@Copyright 2022 all rights reserved</span>
                        <div><span>Email : </span> <span>allauddinansari717@gmail.com</span></div>
                        <div><span>Phone : </span><span>0225165668</span></div>
                       
                        
                     
                    </div>
                    {/* <div>
                       <span>Address</span>
                       <span>141 Stoddard Road Mount Roskill</span>
                       <span>Auckland</span>
                       <span>1041</span>
                       <span>New Zealand</span>
                        
                    </div> */}
                </div>







            </div>

        </div>
    )
}
