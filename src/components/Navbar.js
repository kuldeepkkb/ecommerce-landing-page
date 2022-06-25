import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [navbar,changeNavbar]=useState(0);
  
  const openMenu=()=>{

// document.getElementById('menubar').classList.toggle('menuopen');
  
    if(navbar===0){

        document.getElementById("menubar").style.width = "100%";
        changeNavbar(1);
    }
    else{
        document.getElementById("menubar").style.width = "0";
        changeNavbar(0);

  }
}
  return <>
  <div className="container-fluid">
        <div className="container-lg">
            <div className="row">
                <div className="logo my-3 my-md-4 col-12 d-flex justify-content-center align-item-center">

                <img src="/ecommerce-landing-page/images/logo.png" alt=""/>
                
                </div>
            </div>
            <div id="menubar" className="row">
                
                    <div className="d-none d-md-block col-3 col-md-1 col-lg-2">
                        <img src="/ecommerce-landing-page/images/search.svg" alt=""/>
                    </div>
                    <div className="col-12 col-md-6 d-flex d-md-block justify-content-center col-md-9 col-lg-8">
                        
                        <ul className="col-6 col-md-12 nav-links justify-content-between d-md-flex flex-row list-unstyled font-weight-bold
                         mt-5 ms-5 pt-5 mt-md-0 ms-md-0 pt-md-0
                         "
                          style={{ fontFamily:'font-family: Montserrat, sansSerif' }}>
                        <li className="p-2 p-md-0" ><NavLink className="hover-underline-animation"  to="/">HOME</NavLink></li>
                        <li className="p-2 p-md-0" ><NavLink className="hover-underline-animation" to="/">SPACES</NavLink></li>
                        <li className="p-2 p-md-0 text-nowrap" ><NavLink className="hover-underline-animation" to="/">PRODUCTS &amp; SERVICES</NavLink></li>
                        {/* <li className="p-2 p-md-0" onClick={()=>{
                            const anchor = document.querySelector('#showroom')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}} >
                        <NavLink className="hover-underline-animation" to="/#showroom">SHOWROOMS</NavLink></li> */}

                        <li className="p-2 p-md-0" ><HashLink className="hover-underline-animation" to="/#showroom">SHOWROOMS</HashLink></li>
                        <li className="p-2 p-md-0" ><NavLink className="hover-underline-animation" to="/">COMPANY</NavLink></li>
                        <li className="p-2 p-md-0" ><NavLink className="hover-underline-animation" to="/">MEDIA</NavLink></li>
                        <li className="p-2 p-md-0" ><NavLink className="hover-underline-animation" to="/">CONTACT</NavLink></li>
                        
                        </ul>     
                    </div>
                    <div className="col-3 col-md-2 col-lg-2 navbar-icons d-none d-md-block p-0 p-lg-auto">
                        <img className="icon" src='/ecommerce-landing-page/images/cart.svg' alt=""/>
                        <img className="icon" src='/ecommerce-landing-page/images/favorites.svg' alt=""/>
                        <img className="icon" src='/ecommerce-landing-page/images/profile.svg' alt=""/>
                    </div>
                  
            </div>
                    <div id='hamburger'>
                        {navbar===0?<MenuIcon  onClick={openMenu}/>:<MenuOpenIcon  onClick={openMenu}/>}
                    </div>
                    <div className="cart-icon d-md-none">
                    <img  src='/ecommerce-landing-page/images/cart.svg' alt=""/>
                    </div>
        </div>
            
   </div>
    
 
  </>;
};

export default Navbar;
