import React from 'react'
import Bag from './Frame.png'
import Heading from '../Heading/Heading'
import './Prolog.css'
import { useNavigate } from 'react-router-dom'
const Prolog = () => {
    const route = useNavigate()

  return (
    <div className='pg'>
       <div className="img mt-5">
       <img  src={Bag} alt="Bag" />
       </div>
        <div className="wrapper ">
        <Heading text="EasiestTravel" arc={-100} radius={-300} />
        </div>
        <div className="txt">
            <h2>Hi Traveller</h2>
            <p className="lead fw-bold">
                Now it's easier <br/>
                than ever to pack <br/>
                for your next travel
            </p>
            <div className="b mt-5">
                <button onClick={()=>{route('/todo')}} className="btn btn-danger px-5">
                    Next
                </button>
            </div>
        </div>

    </div>
  )
}

export default Prolog