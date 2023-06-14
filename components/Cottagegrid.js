import Cottage from "./Cottage"
import data from "../cottagedata.json"

const Grid = () => {
    return (
        <div>
            <h1>Our Cottages</h1>
            <div className="grid-container">
                {data.map((item,index)=>(
                    <Cottage
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