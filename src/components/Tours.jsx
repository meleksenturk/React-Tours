import Tour from '../components/Tour'

function Tours({tours, removeTour}){
    return( 
        <div className='mainTours'>
            {tours.map((tour) => {
                return(<Tour key={tour.id} {...tour} removeTour= {removeTour}/>)
            })}
            
        </div>
    )
}

export default Tours;