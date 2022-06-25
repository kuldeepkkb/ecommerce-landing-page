import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Footer = () => {

    return(
        <>
        <div className="footer container-fluid position-relative d-md-flex p-5 footer text-white  bg-dark" style={{marginBottom: '-20px'}}>
            <div className="links text-center text-md-start ps-md-5 ms-md-5 col-12 col-md-4">
                <div className="logo">
                    <img src="/ecommerce-landing-page/images/logo-white.png" alt="" />
                </div>
                <div className="footer-bottom-content">
                <div className="link-icons mt-5 mb-3">
                    <img className="me-3" src="/ecommerce-landing-page/images/facebook.svg" alt="" />
                    <img className="me-3" src="/ecommerce-landing-page/images/twitter.svg" alt="" />
                    <img className="me-3" src="/ecommerce-landing-page/images/insta.svg" alt="" />
                </div>
                <div className="copyright-text text-secondary">Copyright © 2022 | All Rights Reserved.</div>
                </div>
            </div>
            <div className="products col-12 col-md-2">
                <ul className="text-white-50 list-unstyled">
                    <li className="footer-product-heading text-white mb-2">Products <span className="d-md-none float-end"><KeyboardArrowDownIcon/></span></li>
                    <ul className="footer-product-content list-unstyled d-none d-md-block">
                    <li>Sand Stone</li>
                    <li>Stone</li>
                    <li>Cement</li>
                    <li>Soft Stone</li>
                    </ul>
                </ul>
            </div>
            <div className="services col-12 col-md-2">
            <ul className="text-white-50  list-unstyled">

                    <li className="footer-service-heading text-white mb-2">Servies<span className="d-md-none float-end"><KeyboardArrowDownIcon/></span></li>
                    <ul className="footer-service-content list-unstyled d-none d-md-block">
                    <li>Measurement Service</li>
                    <li>Product Advice</li>
                    <li>Interior Design</li>
                    </ul>
                </ul>
            </div>
            <div className="contact col-12 col-md-3">
                <ul className=" list-unstyled">
                    <li className="footer-contact-heading mb-2">Contact Information<span className="d-md-none float-end"><KeyboardArrowDownIcon/></span></li>
                    <li className="footer-contact-content d-none d-md-block">3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, 
                        An Nuzhah, Riyadh 12474, 
                        Saudi Arabia
                    </li>

                </ul>
                {/* <div className="text-secondary ms-5 mt-5 ">Created with love</div> */}
            </div>
            <hr style={{ color:'#aaa', width:'100%',height:'2px' }} className="d-md-none"/>
        </div>
        </>
    );
}
export default Footer;