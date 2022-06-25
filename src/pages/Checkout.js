import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div
        className="navigator fs-5   p-4 px-md-5"
        style={{
          background:
            "linear-gradient(rgba(100,100,100,.1),rgba(255,255,255,1))",
        }}
      >
        <div className="container">
          <div className="heading fs-2 fw-bold">Checkout</div>
          <div>
            <Link to="/" className="d-flex align-items-center text-dark">
              {" "}
              <KeyboardBackspaceIcon />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="container p-lg-5  ">
        <div className="row g-5 mw-100 m-0">
          <div
            className="col-12 col-lg-4"
            style={{ backgroundColor: "rgba(250,250,250)" }}
          >
            <form action="" className="row g-3 py-4">
              <div className="col-12 form-control d-flex py-0 bg-transparent border-0">
                <div className="col-3 p-0">
                  <input
                    type="radio"
                    className="btn-check"
                    name="prefix"
                    id="prefix-mr"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-dark h-100 w-100 rounded-0"
                    htmlFor="prefix-mr"
                  >
                    Mr
                  </label>
                </div>
                <div className="col-3 p-0">
                  <input
                    type="radio"
                    className="btn-check"
                    name="prefix"
                    id="prefix-mrs"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-dark h-100 w-100 rounded-0"
                    htmlFor="prefix-mrs"
                  >
                    Mrs
                  </label>
                </div>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="fname"
                  id="fname"
                  placeholder="First Name*"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="lname"
                  id="lname"
                  placeholder="Last Name*"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control rounded-0"
                  name="email"
                  id="email"
                  placeholder="E-Mail"
                  autoComplete="off"
                />
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="street"
                  id="street"
                  placeholder="Street*"
                  autoComplete="off"
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="house"
                  id="house"
                  placeholder="Houses*"
                  autoComplete="off"
                />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="postcode"
                  id="postcode"
                  placeholder="Postcode*"
                  autoComplete="off"
                />
              </div>
              <div className="col-7">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="location"
                  id="location"
                  placeholder="Location*"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <select
                  className="form-control rounded-0"
                  defaultValue="selected"
                  name="country"
                  id="country"
                >
                  <option value="selected" disabled>
                    Select Country
                  </option>
                </select>
              </div>
              <div className="col-12">
                <input
                  type="number"
                  className="form-control rounded-0"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <small className="text-black-50">*Required Fields</small>
              </div>
              <div className="col-12 form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="create-ac"
                  id="create-ac"
                />
                <label className="form-check-label" htmlFor="create-ac">
                  Create a customer account now and benefit from many
                  advantages.
                </label>
              </div>
              <div className="col-12 my-3 ms-3">
                <small className="text-black-50">
                  &#9432; The password will be sent to you by email
                </small>
              </div>

              <div className="col-12 form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="create-ac"
                  id="create-ac"
                />
                <label className="form-check-label" htmlFor="create-ac">
                  Shipping Address is Different
                </label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="fname"
                  id="fname"
                  placeholder="First Name*"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="lname"
                  id="lname"
                  placeholder="Last Name*"
                  autoComplete="off"
                />
              </div>

              <div className="col-8">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="street"
                  id="street"
                  placeholder="Street*"
                  autoComplete="off"
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="house"
                  id="house"
                  placeholder="Houses*"
                  autoComplete="off"
                />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="postcode"
                  id="postcode"
                  placeholder="Postcode*"
                  autoComplete="off"
                />
              </div>
              <div className="col-7">
                <input
                  type="text"
                  className="form-control rounded-0"
                  name="location"
                  id="location"
                  placeholder="Location*"
                  autoComplete="off"
                />
              </div>
              <div className="col-12">
                <select
                  className="form-control rounded-0"
                  defaultValue="selected"
                  name="country"
                  id="country"
                >
                  <option value="selected" disabled>
                    Select Country
                  </option>
                </select>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-4">
            <form action="">
              <div
                className="method-1 row p-3 mb-3"
                style={{ backgroundColor: "rgba(250,250,250)" }}
              >
                <img
                  className="border border-dark col-3"
                  src="/ecommerce-landing-page/images/checkout_1.png"
                  alt=""
                />
                <div className="col-3 d-flex align-items-center">Pay Pal</div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    name="paypal"
                    id="paypal"
                  />
                </div>
              </div>
              <div
                className="method-2 row p-3 mb-3"
                style={{ backgroundColor: "rgba(250,250,250)" }}
              >
                <img
                  className="border border-dark col-3"
                  src="/ecommerce-landing-page/images/checkout_1.png"
                  alt=""
                />
                <div className="col-5 d-flex align-items-center">
                  Pay Pal Plus
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    name="paypal"
                    id="paypal"
                  />
                </div>
              </div>
              <div
                className="method-3 row p-3 mb-3"
                style={{ backgroundColor: "rgba(250,250,250)" }}
              >
                <img
                  className="border border-dark col-3"
                  src="/ecommerce-landing-page/images/checkout_2.png"
                  alt=""
                />
                <div className="col-5 d-flex align-items-center">
                  Investment Bank
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    name="paypal"
                    id="paypal"
                  />
                </div>

                <div className="row g-3 p-0">
                  <div className="col-12 pe-0">
                    <input
                      type="text"
                      className="form-control rounded-0"
                      name="credit-card-number"
                      id="credit-card-number"
                      placeholder="Credit card number*"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-5">
                    <input
                      type="month"
                      className="form-control rounded-0"
                      name="expiry-date"
                      id="expiry-date"
                      placeholder="Expiry Date*"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-7 pe-0">
                    <input
                      type="number"
                      className="form-control rounded-0"
                      name="cvv"
                      id="cvv"
                      placeholder="CVC / CVV*"
                      autoComplete="off"
                    />
                  </div>
                  <div className="col-12 pe-0">
                    <input
                      type="text"
                      className="form-control rounded-0"
                      name="cardholder-name"
                      id="cardholder-name"
                      placeholder="Name of Cardholder*"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-12 col-lg-4 h-100 py-4"
            style={{ backgroundColor: "rgba(250,250,250)" }}
          >
            <div className="row fs-5 fw-bold">
              <div className="col-6">
                <div>Article</div>
              </div>
              <div className="col-6 text-end">
                <div>Total SAR</div>
              </div>
            </div>

            <div className="row">
              <div className="col-4 py-4">
                <img src="/ecommerce-landing-page/images/cart_1.png" alt="" />
              </div>
              <div className="col-5 ps-lg-2 ps-xl-0 product-details d-flex flex-column justify-content-center">
                <div className="quantity">1x</div>
                <div className="product-description text-black-50">Lorem</div>
                <div className="product-name fs-5  fw-bold">Lorem Ipsum</div>
                <div className="product-description text-black-50">Ipsum</div>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center fs-5">
                690.00
              </div>
            </div>
            <div className="row">
              <div className="col-4 py-4">
                <img src="/ecommerce-landing-page/images/cart_1.png" alt="" />
              </div>
              <div className="col-5 ps-lg-2 ps-xl-0 product-details d-flex flex-column justify-content-center">
                <div className="quantity">1x</div>
                <div className="product-description text-black-50">Lorem</div>
                <div className="product-name fs-5  fw-bold">Lorem Ipsum</div>
                <div className="product-description text-black-50">Ipsum</div>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center fs-5">
                690.00
              </div>
            </div>
            <div className="row">
              <div className="col-4 py-4">
                <img src="/ecommerce-landing-page/images/cart_1.png" alt="" />
              </div>
              <div className="col-5 ps-lg-2 ps-xl-0 product-details d-flex flex-column justify-content-center">
                <div className="quantity">1x</div>
                <div className="product-description text-black-50">Lorem</div>
                <div className="product-name fs-5  fw-bold">Lorem Ipsum</div>
                <div className="product-description text-black-50">Ipsum</div>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center fs-5">
                690.00
              </div>
            </div>

            <div className="fw-bold">
              Do you have a voucher?{" "}
              <small className="text-black-50">(optional)</small>
            </div>
            <div className="row p-0 my-4">
              <div className="col-6">
                <input
                  className="form-control rounded-0"
                  type="text"
                  name="voucher"
                  id="voucher"
                  placeholder="Enter the code"
                />
              </div>
              <div className="col-6 ">
                <div className="btn btn-dark h-100 w-100 rounded-0">Redeem</div>
              </div>
            </div>
            <div className="row ">
              <div className="col-6">
                <div className="fw-bold">Subtotal</div>
                <small className="text-black-50">shippment</small>
              </div>
              <div className="col-6 text-end">
                <div className="fw-bold">2.070.00</div>
                <small className="text-black-50">103.50</small>
              </div>
            </div>
            <div className="text-black-50 my-3">
              Delivery time 2 - 4 working days
            </div>

            <div className="row my-3">
              <Link to="/">
                <div className="btn btn-dark w-100 rounded-0 my-3">
                  Checkout
                </div>
              </Link>
              <div className="col-12 form-check ms-3">
                <input
                  className="form-check-input rounded-0"
                  type="checkbox"
                  name="create-ac"
                  id="create-ac"
                />
                <label className="form-check-label" htmlFor="create-ac">
                  T&amp;C is simply dummy text of the printing and typesetting
                  industry
                </label>
              </div>
              <div className="row my-4">
                <div className="col-6">
                  <div className="fw-bold fs-5">Total</div>
                  <small className="text-black-50">(VAT)</small>
                </div>
                <div className="col-6 text-end">
                  <div className="fw-bold fs-5">143,910.00</div>
                  <small className="text-black-50">7,195.00</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
