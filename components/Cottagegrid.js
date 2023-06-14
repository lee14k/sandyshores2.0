import Cottages from "./Cottages"
import data from "../../sandyshores2.0/cottagedata.json"
import './cottages.css';

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
                    imageUrl={item.imageUrl}/>
                ))}
            </div>
        </div>
    )
}

export default Grid