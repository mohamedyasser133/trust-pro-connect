import React from "react";


function Services() {
 
 
  return(
 
 <>
<section  className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" styling="
    background-image: url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp);
  ">
  <div  className="row d-flex justify-content-center">
    <div  className="col-md-10">
      <div  className="card">
        <div  className="card-body m-3">
          <div  className="row">
            <div  className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
              <img src="file:///D:/AdobeStock_230464218.jpeg"
                 className="rounded-circle img-fluid shadow-1" alt="woman avatar" width="200" height="200" />
            </div>
            <div  className="col-lg-8">
              <p  className="text-muted fw-light mb-4">
                cleanin houses service for  renting a vacant house in the city of
              </p>
              <p  className="fw-bold lead mb-2"><strong>mahmoud</strong></p>
              <p  className="fw-bold text-muted mb-0">Cleanin service</p>
              <form action="/cart">
                    <input type="submit" value="Add To Cart"className="btn btn-primary" />
                  </form>
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
)}
export default Services;