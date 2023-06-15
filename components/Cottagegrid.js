import Cottages from "./Cottages"
import data from "./cottagedata.json"
import './Cottagegrid.css';

const Grid = () => {
    return (
        <div className="wholegrid">
            <h1>Our Cottages</h1>
            <div className="grid-container">
                {data.map((item,index)=>(
                    <Cottages
                    key={index}
                    cottageName={item.cottageName}
                    rate={item.rate}
                    imageUrl={item.imageUrl}
                    guests={item.guests}/>
                ))}
            </div>
        </div>
    )
}

export default Grid