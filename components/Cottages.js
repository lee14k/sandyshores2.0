import './cottages.css';

function Cottage({imageUrl, cottageName, rate}) {
  return (
    <div className="Cottage">
      <img className='gridpic' src={imageUrl} />
      <h4>{cottageName}</h4>
      <p>{rate}</p>
    </div>
  );
}

export default Cottage;