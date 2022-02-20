import './HomePage.css'
import Pic from './better.gif'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const route = useNavigate()
  return (
    <div className='home'>
        <div className="pic">
            <img src={Pic} alt="Pic" />
        </div>
        <div className="nx">
        <button onClick={()=>{route('/')}} className='px-5 btn-danger bn'>
          <span className="text-light fw-bold">
              Next
          </span>
         </button>
        </div>
    </div>
  )
}

export default HomePage