import PropTypes from 'prop-types';

export default function ProductCard({ data = {}, handleAddtoCart=()=>{},isAddedToCart=false}) {
  function renderRatings(rating = 0) {
    let ratingsNode = [];
    for (let i = 0; i < rating; i++) {
      ratingsNode.push(<div className="bi-star-fill"></div>);
    }
    return ratingsNode;
  }

  return (
    <div className="col-md-3 mb-3">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>

        <img className="card-img-top" src={data.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {renderRatings(data.rating)}
            </div>
            <span className="text-muted text-decoration-line-through">
              ${data.normalCost}
            </span>
            ${data.actualCost}
          </div>
          <div className="text-center font-weight-bold fw-bolder" >{data.brand}</div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <buttton className="btn btn-outline-dark mt-auto" onClick={()=>handleAddtoCart(data)}>
              {isAddedToCart ? "Added to cart" :"Add to cart"}
            </buttton>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes ={
  data:PropTypes.object,
  handleAddtoCart:PropTypes.func,
  isAddedToCart:PropTypes.bool,

}