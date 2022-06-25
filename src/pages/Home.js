import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        className="home rectangle-img p-0 container-fluid"
        syle={{ backGroundImage: 'url("/images/home_bg.png")' }}
      >
        {/* <img src="/ecommerce-landing-page/images/home_bg.png" /> */}

        <div className="card">
          <div className="card-body p-4">
            <h2 className="card-title text-nowrap py-2">New Generation Ceramic Tile</h2>
            <p className="card-text">
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi volutpat nibh ex ultricies.
              Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </p>

            <button className="btn btn-white my-3">
              <NavLink to="/catalog" className="card-link">
                Learn More
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="container p-lg-5">
        
        <div className="products-section section">
          <div className="product-heading section-heading">
            <h1>Products</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="product-text section-heading-text px-md-5 mx-md-5 py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            possimus dignissimos, commodi voluptatum beatae expee ad. Quod
            expedita natus similique ut id animi quo.
          </div>
          <div className="product-section-1 d-none d-md-flex">
            <div className="bathroom-tiles me-2">
              <img src="/ecommerce-landing-page/images/product_bg_1.png" alt="" />
              <Link to="/catalog">
              <div className="product-picture-caption">
                <div className="caption-title">Bathroom Tiles</div>
                <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
              </div>
              </Link>
            </div>
            <div className="marble me-2">
              <img src="/ecommerce-landing-page/images/product_bg_2.png" alt="" />
              <Link to="/catalog">
              <div className="product-picture-caption">
                <div className="caption-title">Marble</div>
                <div className="caption-text">Ante mus blandit sapien sociosqu</div>
              </div>
              </Link>
            </div>
            <div className="product-section-1-sub">
              <div className="outdoor me-2">
                <img src="/ecommerce-landing-page/images/product_bh3.png" alt="" />
              <Link to="/catalog">
                
                <div className="product-picture-caption">
                  <div className="caption-title">Outdoor Flooring</div>
                  <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
                </div>
                </Link>
              </div>
              <div className="kitchen">
                <img src="/ecommerce-landing-page/images/product_bg_4.png" alt="" />
              <Link to="/catalog">
                <div className="product-picture-caption">
                  <div className="caption-title">Kitchen Interior</div>
                  <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
                </div>
                </Link>
              </div>
            </div>
          </div>
{/* carousel starts */}
          <div id="carouselExampleIndicators2" className="carousel slide d-block d-md-none" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="/ecommerce-landing-page/images/product_bg_1.png" className="d-block w-100" alt="" />
              <Link to="/catalog">
              <div className="product-picture-caption">
                <div className="caption-title">Bathroom Tiles</div>
                <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
              </div>
              </Link>
              </div>
              <div className="carousel-item">
              <img src="/ecommerce-landing-page/images/product_bg_2.png" className="d-block w-100" alt="" />
              <Link to="/catalog">
              <div className="product-picture-caption">
                <div className="caption-title">Marble</div>
                <div className="caption-text">Ante mus blandit sapien sociosqu</div>
              </div>
              </Link>
              </div>
              <div className="carousel-item">
              <img src="/ecommerce-landing-page/images/product_bh3.png" className="d-block w-100" alt="" />
                <div className="product-picture-caption">
                  <div className="caption-title">Outdoor Flooring</div>
                  <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
                </div>
              </div>
              <div className="carousel-item">
              <img src="/ecommerce-landing-page/images/product_bg_4.png" className="d-block w-100" alt="" />
                <div className="product-picture-caption">
                  <div className="caption-title">Kitchen Interior</div>
                  <div className="caption-text">Ante mus blandit sapien sociosqu per consequat ad.</div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
{/* carousel ends */}
          <div className="product-section-2">
            <img src="/ecommerce-landing-page/images/vision_bg.png" alt="" />
            <div className="card">
              <div className="card-body p-4 py-md-1 p-lg-4">
                <h2 className="card-title py-2">Vision</h2>
                <p className="card-text">
                  Penatibus sem vitae mollis luctus mi tellus. Maximus eu
                  eleifend aptent dapibus metus maecenas consequat. Elementum
                  interdum a semper. Netus nullam eros nisi volutpat nibh ex
                  ultricies. Pharetra sagittis sit a.isi volutpat nibh ex
                  ul
                </p>

                <button className="btn btn-black my-3">
                  <NavLink to="#" className="card-link">
                    Learn More
                  </NavLink>
                </button>
              </div>
              
            </div>
          </div>

          <div className="product-section-3 d-flex justify-centent-between">
            <div className="product-section-3-left d-md-flex flex-column justify-content-between col-12 col-md-7 col-lg-8">
              <div className=" text-center text-md-start col-12 col-md-8">
                <div className="title ">
                  <h2 className="fw-bolder">Creative Solutions <br />
                  by Professional Designers</h2>
                </div>
                <div className="text my-2 my-md-4 py-1">
                  Penatibus sem vitae mollis luctus mi tellus. Maximus eu
                  eleifend aptent dapibus metus maecenas consequat. Elementum
                  interdum a semper. Netus nullam eros nisi volutpat nibh ex
                  ultricies. Pharetra sagittis sit aliquet at. Magna nam platea
                  justo.
                </div>
              </div>
              <div className="3-image py-1 col-12 d-none d-md-flex justify-content-between pe-md-5">
                <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_1.png" alt="" />
                <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_2.png" alt="" />
                <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_3.png" alt="" />
                {/* <div className="col-1"></div> */}
              </div>

              <div className="d-none d-md-block justify-content-center">
                <div className="btn btn-black"> <NavLink to="#" className="card-link">
                  Read More
                  </NavLink></div>
              </div>
            </div>

            <div className="product-section-3-right col-4 d-none d-md-block col-lg-4 flex-grow-1">
              <img src="/ecommerce-landing-page/images/creative_solution_4.png" alt="" />
              <div className="watch-video-box"></div>
            </div>
          </div>
        </div>

{/* carousel for produts section 3 */}
          <div id="carouselExampleIndicators3" className="carousel slide d-block d-md-none mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_1.png" alt="" />

              </div>
              <div className="carousel-item">
              <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_2.png" alt="" />

              </div>
              <div className="carousel-item">
              <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_3.png" alt="" />

              </div>
              <div className="carousel-item">
              <img className="col-12 col-md-3" src="/ecommerce-landing-page/images/creative_solution_4.png" alt="" />

              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
{/* carousel ends */}

        <div className="projects-section section">
          <div className="project-heading section-heading">
            <h1>Projects</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="projects-text section-heading-text px-md-5 mx-md-5 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <div className="projects-image-container d-none d-md-flex justify-content-between">
            <div className="image-card  px-1 col-3">
              <img className="project-image w-100 h-auto" src="/ecommerce-landing-page/images/project_1.png" alt=""  />
              <div className="text text-center my-4">
                <div className="image-title fw-bold fs-5">Kingdom Tower</div>
                <div className="image-text">Marble Flooring</div>
              </div>
            </div>
            <div className="image-card  px-1 col-3">
              <img className="project-image w-100 h-auto" src="/ecommerce-landing-page/images/project_2.png" alt=""  />
              <div className="text text-center my-4">
                <div className="image-title fw-bold fs-5">Dubai mall</div>
                <div className="image-text">Wood Flooring</div>
              </div>
            </div>
            <div className="image-card  px-1 col-3">
              <img className="project-image w-100 h-auto" src="/ecommerce-landing-page/images/project_3.png" alt=""  />
              <div className="text text-center my-4">
                <div className="image-title fw-bold fs-5">King Road Offices</div>
                <div className="image-text">Outdoor Flooring</div>
              </div>
            </div>
            <div className="image-card  px-1 col-3">
              <img className="project-image w-100 h-auto" src="/ecommerce-landing-page/images/project_4.png" alt=""  />
              <div className="text text-center my-4">
                <div className="image-title fw-bold fs-5">Beach Tower Alupang</div>
                <div className="image-text">Wood Flooring</div>
              </div>
            </div>
          </div>
{/* carousel start */}
          <div id="carouselExampleCaptions" className=" d-md-none carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/ecommerce-landing-page/images/project_1.png" className="d-block w-100" alt="..."/>
                
                <div className="carousel-caption mt-5 d-none d-md-block">
                  <h5>Kingdom Tower</h5>
                  <p>Marble Flooring</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/ecommerce-landing-page/images/project_2.png" className="d-block w-100" alt="..."/>

                <div className="carousel-caption mt-5 d-none d-md-block">
                  <h5>Dubai mall</h5>
                  <p>Wood Flooring</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/ecommerce-landing-page/images/project_3.png" className="d-block w-100" alt="..."/>

                <div className="carousel-caption mt-5 d-none d-md-block">
                  <h5>King Road Offices</h5>
                  <p>Outdoor Flooring</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/ecommerce-landing-page/images/project_4.png" className="d-block w-100" alt="..."/>

                <div className="carousel-caption mt-5 d-none d-md-block">
                  <h5>Beach Tower Alupang</h5>
                  <p>Wood Flooring</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>



          <div className="button mt-5 d-flex justify-content-center">
            <div className="btn btn-black"> <NavLink to="#" className="card-link">
                   View All
                  </NavLink></div>
          </div>
        </div>

        <div className=" d-none d-md-block collection-section section">
          <div className="collection-heading section-heading">
            <h1>Tile Collections</h1>
          </div>
          <div className="hr">
            <hr />
          </div>
          <div className="collection-text section-heading-text px-md-5 mx-md-5 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </div>
          <div className="collection-container d-flex flex-wrap justify-content-between">
           
           
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_1.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Vision 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">237.99 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_2.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Pearl 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_3.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Grey 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_4.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Dark Grey 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_5.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Windsor White Oak</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_6.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey Décor 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_7.png" alt="" />
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sardinia White</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-2 col-3">
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
          <div className="button col-12 text-center my-4">
            <div className="btn btn-black d-inline-flex">
            <NavLink to="#" className="card-link">
                  More Products
                  </NavLink>
                  </div>
          </div>
        </div>

        <div id="showroom" className="showroom-container flex-column-reverse flex-md-row d-flex mw-100 my-5 pt-5">
          <img className="col-12 col-md-6 mx-2" src="/ecommerce-landing-page/images/our_showroom.png" alt="" />
          <div className="container d-flex flex-column justify-content-center mx-2 px-4 mx-md-auto px-md-auto col-12 col-md-6">
            <div className="card ">
              <div className="card-body p-4">
                <h1 className="card-title py-2 dark fw-bold text-start">Our Showrooms</h1>
                <p className="card-text text-start ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
                <button className="btn btn-black my-5 mt-md-2 ">
                  <NavLink to="#" className="card-link">
                    Learn More
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
