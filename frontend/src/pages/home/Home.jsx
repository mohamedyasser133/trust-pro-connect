import React from 'react';
import { Icon } from '@iconify/react';
import landingPageImage from '../../static/images/landing-page.png'
import { Button, Col, Row } from 'react-bootstrap';

const items = [
  {
    title: 'Home business',
    icon: 'ic:baseline-home'
  },
  {
    title: 'Office work',
    icon: 'vaadin:office'
  },
  {
    title: 'Building works',
    icon: 'ph:buildings-bold'
  },
  {
    title: 'All repairs',
    icon: 'fluent-mdl2:repair'
  },
  {
    title: 'Multi cleaning',
    icon: 'healthicons:cleaning'
  },
  {
    title: 'Plumbing works',
    icon: 'material-symbols:plumbing'
  },
]


const componyData = [
  {
    title: 'Office address',
    value: "Menofia",
    icon: 'mingcute:location-fill'
  },
  {
    title: 'Email',
    value: "trust-pro.support.com",
    icon: 'ic:baseline-email'
  },
  {
    title: 'Phone',
    value: "0123456789",
    icon: 'ic:baseline-phone'
  },
  {
    title: 'Opening time',
    value: "from 9am to 11pm",
    icon: 'svg-spinners:clock'
  },
]

function Home() {


  return (

    <div style={{ background: '#d4e6ff' }} >
      <Row style={{ backgroundColor: '#15b2f5', minHeight: '50vh', alignItems: 'center', margin: '0px' }}>
        <Col className='h-100' sm={12} md={6}>
          <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={landingPageImage} alt="landing page image" />
        </Col>
        <Col className='p-3 h-100 d-flex justify-content-center align-items-start flex-column flex-wrap' sm={12} md={6}>
          <h2 className='text-light text-capitalize'> take care your home exceptional repair </h2>
          <p style={{ color: '#fffc' }} className='text-capitalize'> at homePro we understand the importance of maintaining and onhancing your home with exceptional repair. we ensure that your home remains in top condition </p>
          <Button className='text-capitalize bg-light text-info d-flex align-items-center gap-1'>
            <Icon icon="mdi:phone" style={{ color: 'white', backgroundColor: '#15b2f5', padding: '5px', fontSize: '30px', borderRadius: '50%' }} />
            Call us now
          </Button>
        </Col>
      </Row>


      <div className="container">
        <h2 className='text-center mt-3 mb-0'> Our services </h2>
        <Row style={{ paddingBottom: '20px' }}>
          {
            items?.map((item, index) => <Col key={index} sm={6} md={4} >
              <div className='bg-light d-flex flex-column align-items-center mt-3 p-3' >
                <Icon style={{ background: 'green', color: 'white', fontSize: '70px', padding: '10px', borderRadius: '50%' }} icon={item.icon} />
                <p>
                  {item.title}
                </p>
              </div>
            </Col>
            )
          }
        </Row>


        <h2 className='text-center mt-3'> Contact Us</h2>
        <Row style={{ paddingBottom: '20px' }}>
          <Col className='p-3 d-flex flex-column align-items-start bg-light' sm={12} md={6} >
            <h4>Feel free for contact us for any kind of query</h4>
            <p className='text-black-50'>Thank you for your interest</p>
            <Row>
              {componyData?.map((item, index) => <Col className='mt-3' sm={6}>
                <Icon className='text-success fs-3' icon={item.icon} />
                <span className='fw-bold' >{item.title} </span>
                <div className='text-black-50'> {item.value} </div>
              </Col>
              )}
            </Row>
          </Col>
          <Col className='p-3 d-flex flex-column align-items-start bg-light' sm={12} md={6} >
            <form className='w-100'>
              <div className="form-group" >
                <label for="exampleInputEmail">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label for="exampleInputName">Email address</label>
                <input type="email" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPhone">Phone</label>
                <input type="text" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" placeholder="Your phone" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-2 w-100">Submit</button>
            </form>
          </Col>
        </Row>

      </div>
    </div>
  )
}
export default Home;