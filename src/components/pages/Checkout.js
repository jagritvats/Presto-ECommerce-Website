import React from 'react'
import './Checkout.css'
import Navbar from "../Navbar"

import {useSelector} from 'react-redux'

function Checkout() {

  const cart = useSelector(state=> state.cart);

  let price = 0;

  cart.forEach(cartItem => {
      price += (cartItem.price * cartItem.quantity)
  });

    return (
        <div>
      <div className="checkout">
        <div className="checkOutDetails">
          <form className="full-detail">
            <div className="perso_pay">
              <div className="delivery">
                <div className="delivery-top">
                  <h2 className="cart-section">Enter Delivery Address</h2>
                  <div>Required field *</div>
                </div>
                <div className="perso-details displayFlex">
                  <div className="personal__info displayFlexCol">
                    <label> First name*: <input type="text" name="fname" required /> </label>
                    <label> Last name *: <input type="text" name="lname" required /> </label>
                    <label> Phone Number *: <input type="number" name="pnumber" required max="9999999999" min="1000000000" /> </label>
                    <label> Email Address *: <input type="email" name="email" required /> </label>
                  </div>
                  <div className="address displayFlexCol">
                    <label> Street address*: <input type="text" name="streetadd" required /> </label>
                    <label> Landmark : <input type="text" name="landmark" /> </label>
                    <label> City*: <input type="text" name="city" required /> </label>
                    <div className="displayFlex" style={{ justifyContent: "space-between" }}>
                      <label className="selectState">State :<select name="state" id="" >
                        <option value="1">Andhra Pradesh</option>
                        <option value="2">Arunachal Pradesh</option>
                        <option value="3">Assam</option>
                        <option value="4">Bihar</option>
                        <option value="5">Chhattisgarh</option>
                        <option value="6" selected>Goa</option>
                        <option value="7">Gujarat</option>
                        <option value="8">Haryana</option>
                        <option value="9">Himachal Pradesh</option>
                        <option value="10">Jharkhand</option>
                        <option value="11">Karnataka</option>
                        <option value="12">Kerala</option>
                        <option value="13">Maharashtra</option>
                        <option value="14">Madhya Pradesh</option>
                        <option value="15">Manipur</option>
                        <option value="16">Meghalaya</option>
                        <option value="17">Mizoram</option>
                        <option value="18">Nagaland</option>
                        <option value="19">Odisha</option>
                        <option value="20">Punjab</option>
                        <option value="21">Rajasthan</option>
                        <option value="22">Sikkim</option>
                        <option value="23">Tamil Nadu</option>
                        <option value="24">Telangana</option>
                        <option value="25">Tripura</option>
                        <option value="26">Uttar Pradesh</option>
                        <option value="27">Uttarakhand</option>
                        <option value="28">West Bengal</option>
                      </select> </label>
                      <label className="pincode"> Pin Code*: <input type="number" name="pincode" required max="999999" /> </label>
                    </div>
                  </div>
                </div>
              </div>

              {/*..................................................... */}

              {/*Payment Method */}
              <div className="pay-info">
                <h2 className="cart-section">Enter Payment Method </h2>
                <div className="card-info">
                  <h3>Card information</h3>
                  <hr />
                  <div className="pay-details displayFlexCol">
                    <label> First name on card*: <input type="text" name="fname" required /> </label>
                    <label> Last name on card*: <input type="text" name="fname" required /> </label>
                    <label> Card Number*: <input type="text" name="fname" required /> </label>
                    <div className="displayFlex" style={{ justifyContent: "space-between" }}>
                      <label style={{ width: "50%" }}> Expiration date*:
                      <div className="displayFlex">
                          <select name="" id="" required>
                            <option value="">MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <select name="years" id="" required>
                            <option value="">YY</option>
                            <option value="1">21</option>
                            <option value="2">22</option>
                            <option value="3">23</option>
                            <option value="4">24</option>
                            <option value="5">25</option>
                            <option value="6">26</option>
                            <option value="7">27</option>
                            <option value="8">28</option>
                            <option value="9">29</option>
                            <option value="10">30</option>
                            <option value="11">31</option>
                          </select>
                        </div>
                      </label>
                      <label style={{ width: "40%" }}> CVV*: <input type="number" name="cvv" required min="100" max="999"  /> </label>
                    </div>
                    <label> Phone number* (7009215892): <input type="number" name="pnumber" required max="1000000000" max="9999999999" /> </label>
                  </div>
                </div>
              </div>

            </div>
            {/* First Section All Personal +Address */}
            {/* Subtotal */}
            <div className="posFixed">
              <div className="subtotal">
                <div className="displayFlex">
                  <div>Subtotal</div>
                  <div>${price}</div>
                </div>
                <div className="displayFlex">
                  <div>Delivery</div>
                  <div>Free</div>
                </div>
                <hr />
                <div className="displayFlex">
                  <div>Total</div>
                  <div><b>${price.toFixed(2)}</b></div>
                </div>
                <hr />
                <button type="submit" className="submitCheckout">Place a Order</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
    )
}

export default Checkout
