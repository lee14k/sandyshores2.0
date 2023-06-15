import './Cottages.css';

function Cottage({imageUrl, cottageName, rate, guests}) {
  return (
    <div className="Cottage">
      <img className='gridpic' src={imageUrl} />
      <h4>{cottageName}</h4>
      <p>Guests: {guests}</p>
      <p>From {rate} per week</p>
    </div>
  );
}

export default Cottage;