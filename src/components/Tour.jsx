import { useState } from 'react';
import '../css/tourStyle.css'

function Tour({ id, image, info, name, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="tourCard">
            <img src={image} width={400} height={300} />
            <div className='tourPrice'>
                <p>{price} $</p>

            </div>
            <div className='tourInfo'>
                <h4>{name}</h4>
                {readMore ? info : `${info.substring(0,200)}...`}
                <button  onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "show more"}
                </button>
            </div>

            <div className='deleteButton'>
                <button onClick={() => removeTour(id)}>Remove tour from list</button>
            </div>

        </div>
    )
}

export default Tour;