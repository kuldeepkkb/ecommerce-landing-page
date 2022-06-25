import { NavLink } from "react-router-dom";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import StorageIcon from '@mui/icons-material/Storage';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import { Link } from "react-router-dom";
const Catalog = () =>  {
  return (
    <>
      <div
        className="black-overlay catalog rectangle-img p-0 container-fluid">
        <div className="text-white text-center text-md-start mt-0 mt-md-5 ps-sm-0 ms-sm-0 ps-md-5 ms-md-5" style={{ zIndex:'1'}}>
          <div className="catalog-heading display-5 fw-bold">
            CATALOG
          </div>
          <div className="catalog-text mt-3 px-1 px-sm-2 px-md-0 col-12 col-md-6 text-light" style={{ fontSize:'smaller' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</div>
        </div>
      </div>


      <div className="container p-lg-5">
        
      
        <div className="catalog-categories section">
         
          <div className="d-none d-md-flex justify-content-between">
            <div className="image-card  image-card-1 bg-dark col-3">
                <div className="text-white px-3 py-4">
                  <div className="image-card-text text-white-50">Lorem Ipsum</div>
                  <div className="my-2">Categories</div>
                  <div className="image-card-text text-white-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                </div>
            </div>
            <div className="light-black-overlay position-relative image-card  image-card-2 col-3">
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
                    <div className="">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
              </div>
            </div>
            
            <div className="light-black-overlay position-relative image-card  image-card-3 col-3">
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
                    <div className="">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
              </div>
            </div>
            
            <div className="light-black-overlay position-relative image-card  image-card-4 col-3">
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
                    <div className="">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50">Lorem Ipsum</div>
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
              <div className="image-card  image-card-1 bg-dark col-12 w-100" style={{ height:'121vw' }}>
                <div className="text-white px-3 py-4">
                  <div className="image-card-text text-white-50 fs-5">Lorem Ipsum</div>
                  <div className="my-2 fs-1">Categories</div>
                  <div className="image-card-text text-white-50 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                </div>
            </div>
              </div>
              <div className="carousel-item">
              <div className="light-black-overlay position-relative image-card  image-card-2 col-10 w-100" style={{ height:'121vw' }}>
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
                    <div className="fs-1">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
              </div>
            </div>
              </div>
              <div className="carousel-item">
              <div className="light-black-overlay position-relative image-card  image-card-3 col-12 w-100" style={{ height:'121vw' }}>
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
                    <div className="fs-1">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
              </div>
            </div>
              </div>
              <div className="carousel-item">
              <div className="light-black-overlay position-relative image-card  image-card-4 col-12 w-100" style={{ height:'121vw' }}>
              <div className="text-white position-absolute bottom-0 px-3 py-4" style={{ zIndex:'1'}}>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
                    <div className="fs-1">Lorem Ipsum</div>
                    <div className="image-card-text text-white-50 fs-2">Lorem Ipsum</div>
              </div>
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



      
        </div>

        <div className=" collection-section section">
          <div className="d-flex flex-column  flex-sm-row justify-content-between">
          <div className="collection-count text-black-50 pb-2" style={{ fontSize:'12px' }}>Showing 1 - 15 of 22 results</div>
          <div className="view-settings " style={{ fontSize:'11px' }} >
            <span className="fw-bold pe-1">Filter</span>
            <span className="px-1"><FilterListIcon fontSize="small"/></span>
            <span className="fw-bold ps-1">Sort by Price</span>
            <span className="pe-1"><KeyboardArrowDownIcon fontSize="small" className="text-black-50"/></span>
            <span className="px-1"><SearchIcon fontSize="small"/></span>
            <span className="px-1"><StorageIcon fontSize="small"/></span>
            <span className="px-1"><ViewArrayIcon fontSize="small"/></span>
            <span className="px-1"><ViewColumnIcon fontSize="small"/></span>
            <span className="ps-1"><ViewColumnIcon fontSize="small"/></span>
          </div>
          </div>
          <div className="collection-container d-flex flex-wrap justify-content-between">
           
           
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_1.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Vision 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">237.99 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_2.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Pearl 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_3.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Grey 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_4.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Zurich Dark Grey 60×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_5.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Windsor White Oak</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_6.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sicily Grey Décor 30×60</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_7.png" alt="" />
              </Link>
              <div className="collection-text text-center py-4 shadow-sm">
                <div className="tile-name fw-bold fs-5">Sardinia White</div>
                <div className="tile-price">
                  <span className="old-price fst-italic me-1 "><strike>449.99 SAR</strike></span>
                  <span className="new-price fw-bold">312.49 SAR</span>
                </div>
              </div>
            </div>
            <div className="collection-card mt-5 px-4 px-md-2 col-12 col-sm-6 col-md-3">
              <Link to="/product">
              <img className="tile-image w-100 h-auto" src="/ecommerce-landing-page/images/Tile_8.png" alt="" />
              </Link>
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
                  Load More
                  </NavLink>
                  </div>
          </div>
        </div>



      <div className="promotion-banner d-flex col-12 shadow position-relative">
        <div className="promotion-card col-12 col-md-5 h-100 d-flex flex-column justify-content-center px-3" style={{ zIndex:'1' }}>
          <div className="heading fs-3 ">Promotional Banner</div>
          <div className="text text-black-50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</div>
        </div>
        <div className="d-none d-md-block h-100 col-5 position-absolute bg-white" style={{ transform: 'skew(331deg) translateX(37px)' }}></div>
        <div className="d-none d-md-block promotion-img col-7 h-100"></div>
      </div>
      </div>

    </>
  );
}
  export default Catalog;