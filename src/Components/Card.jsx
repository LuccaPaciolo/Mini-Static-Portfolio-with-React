
import LocationIcon from '../Images/location.png'
import DateIcon from '../Images/calender.png'


function Card (props) {
    return (
     <div className="card">
        <div className="card-image-holder">
          <img src={props.image} alt="card-image"  className='card-image'/>
        </div>
        <div className="card-contents">
          <img src={LocationIcon} alt="location-icon"  className='location-icon'/>
          <span>{props.placeName}</span>
          <h1>{props.title}</h1>
            <div className="date">
              <img src={DateIcon} alt="date-icon" className='date-icon' />
              <span>Jan, 2021 - Feb, 2021</span>
            </div>
            <p>{props.description}</p>
        </div>    

        
            
  
     </div>
    )            
     
  }
  export default Card