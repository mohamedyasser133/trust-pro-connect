function Review() {
  return (
<div className="row">
      <div className="p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 heigh-100">
        <div class="card" style={{ height: '100%' }} styling="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">
              <a href="Services">Service</a>
              <p>Price:= $10 per hour</p>
            </h5>
            <form action="/cart">
              <input type="submit" value="Add To Cart" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
      <div className="p-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 heigh-100">
        <div class="card" styling="width: 18rem;">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <a href="Services">Cleaning Service</a>
              <p>Price:= $15 per hour</p>
            </h5>
            <form action="cart">
              <input type="submit" value="Add To Cart" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Review;