import './cottage.css';

function Cottage({imageUrl, cottageName, rate}) {
  return (
    <div className="Cottage">
      <img src={imageUrl} />
      <h4>{cottageName}</h4>
      <p>{rate}</p>
    </div>
  );
}

export default Cottage;paf