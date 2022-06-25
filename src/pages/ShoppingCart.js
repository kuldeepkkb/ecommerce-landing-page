import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };
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
          <div className="heading fs-2 fw-bold">Shopping Cart</div>
          <div >
          <Link to="/" className="d-flex align-items-center text-dark"> <KeyboardBackspaceIcon />
            Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="container p-lg-5  mt-5">
        <div className="row justify-content-between ">
          <div className="products col-12 col-lg-8 table-responsive">
            <table
              className="table table-borderless text-center align-middle"
              style={{ backgroundColor: "rgba(250,250,250)" }}
            >
              <tbody>
                <tr className="border-bottom">
                  <th className="pt-4"></th>
                  <th className="pt-4">Unit Price</th>
                  <th className="pt-4">QTY</th>
                  <th className="pt-4">Total SAR</th>
                  <th className="pt-4"></th>
                </tr>
                <tr className="border-4 border-top-0 border-start-0 border-end-0 border-white">
                  <td>
                    <div className="d-flex">
                      <div className="product-pic p-4">
                        <img
                          src="/ecommerce-landing-page/images/cart_1.png"
                          alt=""
                        />
                      </div>
                      <div className="product-details d-flex flex-column justify-content-center">
                        <div className="product-name fs-5  fw-bold">
                          Product Name
                        </div>
                        <div className="product-description text-black-50">
                          Lorem Ipsum
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="btn">
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={decrement}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &mdash;
                        </span>
                        <input
                          className="border-0 w-50 text-center fs-4 bg-transparent"
                          type="text"
                          value={quantity}
                          readOnly
                        />
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={increment}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &#xff0b;
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td className="pe-4">
                    <DeleteOutlineIcon className="p-0" />
                  </td>
                </tr>
                <tr className="border-4 border-top-0 border-start-0 border-end-0 border-white">
                  <td>
                    <div className="d-flex">
                      <div className="product-pic p-4">
                        <img
                          src="/ecommerce-landing-page/images/cart_1.png"
                          alt=""
                        />
                      </div>
                      <div className="product-details d-flex flex-column justify-content-center">
                        <div className="product-name fs-5  fw-bold">
                          Product Name
                        </div>
                        <div className="product-description text-black-50">
                          Lorem Ipsum
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="btn">
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={decrement}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &mdash;
                        </span>
                        <input
                          className="border-0 w-50 text-center fs-4 bg-transparent"
                          type="text"
                          value={quantity}
                          readOnly
                        />
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={increment}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &#xff0b;
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td className="pe-4">
                    <DeleteOutlineIcon className="p-0" />
                  </td>
                </tr>
                <tr className="border-4 border-top-0 border-start-0 border-end-0 border-white">
                  <td>
                    <div className="d-flex">
                      <div className="product-pic p-4">
                        <img
                          src="/ecommerce-landing-page/images/cart_1.png"
                          alt=""
                        />
                      </div>
                      <div className="product-details d-flex flex-column justify-content-center">
                        <div className="product-name fs-5  fw-bold">
                          Product Name
                        </div>
                        <div className="product-description text-black-50">
                          Lorem Ipsum
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="btn">
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={decrement}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &mdash;
                        </span>
                        <input
                          className="border-0 w-50 text-center fs-4 bg-transparent"
                          type="text"
                          value={quantity}
                          readOnly
                        />
                        <span
                          className="btn btn-outline-dark fs-3"
                          onClick={increment}
                          style={{ width: "30px", height: "30px" }}
                        >
                          &#xff0b;
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>199.00</td>
                  <td className="pe-4">
                    <DeleteOutlineIcon className="p-0" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-4 mt-5 mt-lg-0">
            <div
                className="cart-total float-end col-12 col-lg-11 mb-auto p-3 pb-4"
                style={{ backgroundColor: "rgba(250,250,250)" }}
            >
                <div className="fw-bold">Do you have a voucher? <small className="text-black-50 fst-italic">(optional)</small></div>
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
                    <div>Subtotal</div>
                    <small className="text-black-50">shipping</small>
                </div>
                <div className="col-6 text-end">
                    <div>138,00 SAR</div>
                    <small className="text-black-50">5,91 SAR</small>
                </div>
                </div>
                <div className="row my-4">
                <div className="col-6">Total <small className="text-black-50 fst-italic">(VAT included.)</small></div>
                <div className="col-6 text-end">143,91 SAR</div>
                </div>
                <Link to="/checkout"><div className="btn btn-dark w-100 rounded-0">Safe to checkout</div></Link>
            </div>
          </div>
        </div>

        <div className="container collection-section section py-5 ">
          <div className="text-center fs-1 mt-5 pt-5">
            Recently Viewed Products
          </div>
          <div className="collection-container d-flex flex-wrap justify-content-between">
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img
                className="tile-image w-100 h-auto"
                src="/ecommerce-landing-page/images/Tile_5.png"
                alt=""
              /></Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Windsor White Oak</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 ">
                    <strike>449.99 SAR</strike>
                  </span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img
                className="tile-image w-100 h-auto"
                src="/ecommerce-landing-page/images/Tile_6.png"
                alt=""
              /></Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">
                  Sicily Grey Décor 30×60
                </div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 ">
                    <strike>449.99 SAR</strike>
                  </span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img
                className="tile-image w-100 h-auto"
                src="/ecommerce-landing-page/images/Tile_7.png"
                alt=""
              /></Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sardinia White</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 ">
                    <strike>449.99 SAR</strike>
                  </span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img
                className="tile-image w-100 h-auto"
                src="/ecommerce-landing-page/images/Tile_8.png"
                alt=""
              /></Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 ">
                    <strike>449.99 SAR</strike>
                  </span>
                  <span className="new-price fw-bold">312.49 SAR</span>
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
