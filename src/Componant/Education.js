import { useEffect, useState } from "react"
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"


function Education() {

  useEffect(()=>{
    Aos.init({
        offset:300,
        duration:1000,
      });
}, [])

  const [state, setstate] = useState(false)
  const [click, setClick] = useState(false)
    const [change, setChange] = useState(false)

    const changeClick = (e) => {
      setstate(!state)
      setClick(false)
      setChange(false)
  }

  const lick = (e) => {
      setClick(!click)
      setstate(false)
      setChange(false)
  }
  const chang = (e) => {
      setChange(!change)
      setClick(false)
      setstate(false)
  }
  return (
    <div className='education mt-5' id='education'>
      <div className=' about d-flex flex-column justify-content-center ' id="about">
        <div><h3 className=' mt-5 abtme nav-link'>Education</h3>
        </div>
        <div><h3 className=' mt-4 wh' >Education</h3>
        </div>
        <div className=' mr-5 mt-3 container'>
          <div className=" row">
            <div  className={state ? " p-3 mb-2 bg-info  col-sm-8 d-flex justify-content-between mx-auto":"bg p-3 mb-2 col-sm-8 d-flex justify-content-between mx-auto"} >
              <h3>Bachelor Of Coumputing System (Software Development)</h3>
              {/* <i className='fas fa-plus'></i> */}

              <div className="plus" onClick={changeClick}>
                {state ? <span><i className='fas fa-minus'></i></span>:
                  <span><i className='fas fa-plus'></i></span> 
                 
                }
              </div>

            </div>

            <div className={state?" change p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto":"changeClick p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto"}>

              <div>
                <h3>Untec Institute of Technology</h3>
                <h3 className='wh'>Capstone Project B+</h3>
                <h3 className='wh'>Mobile Software B+</h3>
              </div>

              <h3>Feb 2021</h3>


            </div>

          </div>

        </div>

        <div className=' mr-5 mt-3 container'>
          <div className=" row">
            <div  className={change?"p-3 mb-2 bg-info  col-sm-8 mx-auto d-flex justify-content-between":"p-3 mb-2 bg  col-sm-8 mx-auto d-flex justify-content-between"}>
              <h3>Certificate in Information Technology </h3>
              <div className="plus" onClick={chang}>
                {change ? <span><i className='fas fa-minus'></i></span>:
                  <span><i className='fas fa-plus'></i></span> 
                 
                }
              </div>
            </div>

            <div className={change?" change p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto":"changeClick p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto"}>

              <div>
                <h3>Untec Institute of Technology</h3>

              </div>

              <h3>july 2017- Dec 2017</h3>


            </div>

          </div>
        </div>

        <div className=' mr-5 mt-3 container'>
          <div className=" row">
            <div  className={click?"p-3 mb-2 bg-info  col-sm-8 mx-auto d-flex justify-content-between":"p-3 mb-2 bg  col-sm-8 mx-auto d-flex justify-content-between"}>
              <h3>High School Secondary Education</h3>
              <div className="plus" onClick={lick}>
                {click ? <span><i className='fas fa-minus'></i></span>:
                  <span><i className='fas fa-plus'></i></span> 
                 
                }
              </div>
            </div>
          </div>
          <div  className={click?" change p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto":"changeClick p-3 mb-2  col-sm-8 d-flex justify-content-between mx-auto"}>

            <div>
              <h3>Marwari College India</h3>

            </div>

            <h3>Feb 2015-Dec 2017</h3>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Education