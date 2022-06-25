import React from "react";
import { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [favourite, setFavourite] = useState(false);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : quantity);
  };
  return (
    <>
      <div className="navigator fs-5   p-4 px-2 px-sm-4 p-md-5 bg-dark text-white">
        Home <ChevronRightIcon /> Table <ChevronRightIcon /> Product Name
      </div>
      <div className="container p-lg-5  mt-5">
        <div className="row">
          <div className="d-none d-md-block product-detail-img text-center text-lg-start col-12 col-lg-6">
            <img
              className="mw-100"
              src="/ecommerce-landing-page/images/product_detail_1.png"
              alt=""
              style={{ objectFit:'contain' }}
            />
           <div className="row my-5">
            <div className="col-12">
                <img
                className="col-lg-3  px-3 p-lg-0 p-lg-0 pd-lg-0 col-md-4 me-lg-3"
                src="/ecommerce-landing-page/images/product_detail_2.png"
                alt=""
                />
                <img
                className="col-lg-3  px-3 p-lg-0 pd-lg-0 col-md-4 me-lg-3"
                src="/ecommerce-landing-page/images/product_detail_3.png"
                alt=""
                />
                <img
                className="col-lg-3  px-3 p-lg-0 pd-lg-0 col-md-4 "
                src="/ecommerce-landing-page/images/product_detail_4.png"
                alt=""
                />
          </div>


         




        </div>
          </div>
          <div id="carousel-product-details" className=" d-md-none carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel-product-details" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel-product-details" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel-product-details" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carousel-product-details" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img
              className="w-100 h-100 d-block"
              src="/ecommerce-landing-page/images/product_detail_1.png"
              alt=""
            />
              </div>
              
              <div className="carousel-item">
              <img
              className="w-100 h-100 d-block"
              src="/ecommerce-landing-page/images/product_detail_2.png"
              alt=""
            />
              </div>
              <div className="carousel-item">
              <img
              className="w-100 h-100 d-block"
              src="/ecommerce-landing-page/images/product_detail_3.png"
              alt=""
            />
              </div>
              <div className="carousel-item">
              <img
              className="w-100 h-100 d-block "
              src="/ecommerce-landing-page/images/product_detail_4.png"
              alt=""
            />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-product-details" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-product-details" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="product-details p-5 p-sm-0 col-12 col-lg-6 mt-3">
            <div className="product-name fs-1 fw-bold">Product Name</div>
            <div className="product-price fs-3">199,50 SAR</div>
            <div className="product-description my-5">
              Product Short Description senectus et netus et malesuada fames ac
              turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies
              eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
              semper. Aenean ultricies mi vitae est. Mauris placerat eleifend{" "}
            </div>

            <div className="row mb-3 ms-0 flex-column flex-sm-row flex-lg-column flex-xl-row ">
              <div className="btn btn-nohover col-5 btn-outline-secondary rounded-0 justify-content-between me-3 mb-2 mb-xl-0">
                <span className="fs-3" onClick={decrement}>
                  &mdash;
                </span>
                <input
                  className="border-0 w-50 text-center fs-4"
                  type="text"
                  value={quantity}
                  readOnly
                />
                <span className="fs-3" onClick={increment}>
                  &#xff0b;
                </span>
              </div>
              <Link to="/cart" className="col-5 me-3 mb-2 mb-xl-0 p-0">
              <div className="add-to-cart-btn btn  rounded-0 btn-dark ">
                {" "}
                Add to cart
              </div>
              </Link>
              <div
                className="favourite col-2 btn btn-outline-secondary btn-nohover text-dark mb-2 mb-xl-0 "
                style={{ width: "auto", maxWidth:'58px' }}
              >
                {favourite ? (
                  <FavoriteBorderOutlinedIcon
                    fontSize="large"
                    onClick={() => {
                      setFavourite(!favourite);
                    }}
                  />
                ) : (
                  <FavoriteIcon
                    fontSize="large"
                    sx={{ color: "rgb(192, 39, 39)" }}
                    onClick={() => {
                      setFavourite(!favourite);
                    }}
                  />
                )}
              </div>
            </div>
            <ul className="ps-3">
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
            </ul>
          </div>
        </div>
        

        <div className="text-center pt-5 mt-5" style={{ minHeight:'140px' }}>
        <ul className="nav nav-tabs justify-content-center border-0 mb-4" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link border-0 text-dark fw-bold active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link border-0 text-dark fw-bold" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="false">Details</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link border-0 text-dark fw-bold" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews(0)</button>
            </li>
            </ul>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="desc-tab">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare euismod arcu, ac laoreet metus pulvinar feugiat. Praesent in feugiat ante, a dictum nunc. Pellentesque convallis tortor quis purus finibus aliquet. In hac habitasse platea dictumst. Proin vestibulum ante ac faucibus tristique. Integer quis efficitur dolor, at dignissim dolor.</div>
            <div className="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare euismod arcu, ac laoreet metus pulvinar feugiat. Praesent in feugiat ante, a dictum nunc. Pellentesque convallis tortor quis purus finibus aliquet. In hac habitasse platea dictumst. Proin vestibulum ante ac faucibus tristique. Integer quis efficitur dolor, at dignissim dolor.</div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">No reviews found</div>
            </div>
        </div>





        <div className="container collection-section section py-5 " style={{ backgroundColor:'#fdfdfd' }}>
          
          <div className="text-center fs-1 ">Related Products</div>
          <div className="collection-container d-flex flex-wrap justify-content-between">
           
           
           
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_5.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Windsor White Oak</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_6.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey Décor 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_7.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sardinia White</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_8.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="text-center fs-1 mt-5 pt-5">Recently Viewed Products</div>
          <div className="collection-container d-flex flex-wrap justify-content-between">
           
           
           
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_5.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Windsor White Oak</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_6.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey Décor 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_7.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sardinia White</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_8.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
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
