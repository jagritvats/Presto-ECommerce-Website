import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div >
             <div className="icons">
    <i className="fa fa-facebook-f"></i>
    <i className="fa fa-instagram"></i>
    <i className="fa fa-pinterest-p"></i>
    <i className="fa fa-twitter"></i>
    <i className="fa fa-youtube"></i>
  </div>

  <div className="row">
    <div className="column sidel">
      <h2 className="foot set1">Presto's services</h2>
      <a href="">Delivery</a>
      <a href="">Grocery Pickup</a>
      <a href="">Money Center</a>
      <a href="">Our Credit Card</a>
      <a href="">Weekly AD</a>
      <a href="">Other Services</a>
    </div>

    <div className="column middle">
      <h2 className="foot set3">Customer services</h2>

      <a href="">Return</a>
      <a href="">Help Center</a>
      <a href="">Accessibility</a>
      <a href="">Contact Us</a>
      <a href="">Store PickUp</a>
      <a href="">Product Recalls</a>
    </div>

    <div className="column side">
      <h2 className="foot set2">Get to know us</h2>

      <a href="">Careers</a>
      <a href="">Our Suppliers</a>
      <a href="">Digital Museum</a>
      <a href="">Our company</a>
      <a href="">Store Directory</a>
      <a href="">Advertise With Us</a>
    </div>


    <div className="column sider">
      <h2 className="foot set4">In The Spotlight</h2>
      <a href="">Skateboard</a>
      <a href="">Outdoor Furniture</a>
      <a href="">Trampoline</a>
      <a href="">PS4</a>
      <a href="">Nintendo Switch Lite</a>
      <a href="">Portable Air Conditioners</a>
    </div>


  </div>
  <div className="HRline"></div>
  <div className="row2">
    <div className="footer right">
      © 2021 Walmart. All Rights Reserved.
    </div>
    <div className="footer left">
      To ensure we are able to help you as best we can, please include your reference number: SEOFEAPHIE
    </div>
  </div>
            
        </div>
    )
}

export default Footer
