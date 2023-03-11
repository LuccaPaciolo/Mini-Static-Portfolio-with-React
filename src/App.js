import Navbar from './Components/Navbar'
import Card from './Components/Card'
import './index.css'
import Data from './Data/Data'

function App () {

    const cardElements = Data.map ((item) => {
        return (
            <Card
                key={item.id}
                {...item}
            
            />
        )
    })

    

    


    return (
        <div className='container'>

            <Navbar/>  
            <div className="card-container">
                 {cardElements} 
            </div>


           
            
              
         </div>
    )
    
       
}

export default App