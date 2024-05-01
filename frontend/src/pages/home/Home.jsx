import React from 'react';
function Home() {

  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary"styling="background-color: #e3f2fd;">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Trust Pro Connect</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Review">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Orders">Orders</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
            <div className="shadow p-3 mb-5 bg-body-tertiary roundedcol col-12 col-md-6 col-lg-4 col-xl-3">
              <div class="card" styling="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="Services">Service</a>
                    <p>Price:= $10 per hour</p>
                    </h5>
                  <form action="/cart">
                    <input type="submit" value="Add To Cart"className="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      <div className="container">
        <div className="row">
            <div className="col col-12 col-md-6 col-lg-4 col-xl-3">
              <div class="card" styling="width: 18rem;">
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="Services">Cleaning Service</a>
                    <p>Price:= $15 per hour</p>
                    </h5>
                  <form action="cart">
                    <input type="submit" value="Add To Cart"className="btn btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </>
  )
}
export default Home;