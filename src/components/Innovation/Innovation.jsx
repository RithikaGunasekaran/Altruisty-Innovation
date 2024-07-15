import React , {useState} from 'react'
import './style.css';
import { IoMdSearch } from "react-icons/io";


const Innovation = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleParagraph = () => {
      setIsVisible(!isVisible);
    };
  
  return (
    <>
    <div className='container'>
        <h5>Innovation Lab</h5>
        <p>
        Altruisty's Innovation Lab is your ultimate hub for turning visionary ideas into reality. Our platform provides cutting-edge Al tools designed to support every stage of your startup journey. From concept development and market analysis to product design and optimization, our resources are tailored to accelerate your growth.
        
        </p>
        <h6>
        Empowering Startups with Advanced AI Tools
        </h6>
        <button className='btn'><IoMdSearch className='search' />
        Discover AI tools</button>
        <div className='wrapper'>
            <div className='grid'>
                <p className='pitch'>Pitch Deck</p>
                
                
      <button onClick={toggleParagraph} className='gridbtn'>
        {isVisible }Try Now
      </button>
      {isVisible && <p>Create powerful pitchdeck using AI driven insights.</p>}
    

            </div>

            

            
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
            <div className='grid'>
                <p className='pitch'></p>
              <button className='gridbtn'>
                  Try Now
               </button>
            </div>
        </div>    
        </div>
    </>
  )
}

export default Innovation