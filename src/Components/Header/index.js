import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import CompanyLogo from './companyLogo.png';
import {
  Box,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocationOn as LocationOnIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useStateValue } from "../../Context/StateProvider";
import axios from 'axios'
import { postReq } from "../../getReq";
const Header = () => {
  const [{ basket, favouriteItems, user, userLoggedIn }] = useStateValue();
  console.log(user)
  const [state, dispatch] = useStateValue();
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [isSmallScreenForUpper1, setIsSmallScreenForUpper1] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  // console.log((user && user.currentAddress && user.currentAddress!==-1))

  const [selectedAddress, setSelectedAddress] = useState((user && user.currentAddress!==undefined && user.currentAddress!==-1)? user.addresses[user.currentAddress] : null);
  const [isLoading, setIsLoading] = useState(false) //useless
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedAddress((user && user.currentAddress!==undefined && user.currentAddress!==-1)? user.addresses[user.currentAddress] : null)
  }, [user.addresses]);


  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleAddressChange = (address) => {
    setSelectedAddress(address);
    handleMenuClose();
  };
  const handleAddNewAddress = () => {
    navigate("/addresses");
    handleMenuClose();
  };

  const renderAddress = (address) => {
    //without loading
    // postReq(setIsLoading, `/user/editaddress?request=currentaddress&address=${address.id}`)
    return (<Box onClick={() => {postReq(setIsLoading, `/user/editaddress?request=currentaddress&address=${address.id}`)}}>
      <Typography variant="body1">{address.name}</Typography>
      <Typography variant="body2">{`${address.city}, ${address.zip}`}</Typography>
    </Box>)
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("basket");
    setSelectedAddress(null)
    dispatch({
      type: "USER_LOGOUT",
    });
    navigate('/')
  };
  const [isSmallScreenForUpper, setIsSmallScreenUpper] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1020);
      setIsSmallScreenForUpper1(window.innerWidth < 1200);
      setIsSmallScreenUpper(window.innerWidth < 800); // Adjust the threshold as needed
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            className="header_logo"
            src={CompanyLogo}
            alt="logo"
          />
        </Link>

        <Box
          sx={{ display: "flex", alignItems: "center", mr: 1, cursor: "pointer" }}
          onClick={handleMenuOpen}
        >
          <LocationOnIcon />
          {!isSmallScreenForUpper && (
            <Typography variant="body1" sx={{ ml: 1 }}>
              {selectedAddress
                ? renderAddress(selectedAddress)
                : "Select Address"}
            </Typography>
          )}
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{ style: { maxHeight: "200px", width: "300px" } }}
        >
          {user?.addresses?.slice(0, 3).map((address, index) => (
            <MenuItem key={index} onClick={() => handleAddressChange(address)}>
              {renderAddress(address)}
            </MenuItem>
          ))}
          {user?.addresses?.length > 3 && (
            <MenuItem onClick={handleAddNewAddress}>View All Addresses</MenuItem>
          )}
          <MenuItem onClick={handleAddNewAddress}>Add New Address</MenuItem>
        </Menu>

        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            ml: 1,
            minWidth: 0,
          }}
        >
          <InputBase
            placeholder="Search for Products, Brands and More"
            inputProps={{ "aria-label": "search" }}
            sx={{
              color: "inherit",
              backgroundColor: "white",
              borderRadius: 1,
              pl: 2,
              pr: 2,
              width: "100%",
            }}
          />
          <IconButton type="submit" sx={{ p: "10px", ml: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <div className="header_nav">
        <Link
  to={userLoggedIn ? "/account" : "/signin"}
  className="header_Link"
>
  <IconButton color="inherit">
    <PersonIcon />
    <div className="header_option">

        <>
          {!isSmallScreenForUpper1 && (
            <span className="header_optionLineOne">
              {userLoggedIn ? `Hello, ${user.displayName}` : "Hello Guest"}
            </span>
          )}
          <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px' }}>
            {userLoggedIn ? 
            (isSmallScreenForUpper1?
            (isSmallScreen?
            (isSmallScreenForUpper?<></>:"Account"):<></>)
             : "Your Account")
             : "Sign In"}
          </span>
        </>
      
    </div>
  </IconButton>
</Link>


          <Link to="/orderhistory" className="header_Link">
          <>
          <IconButton color="inherit">
                  <ShoppingBagIcon />
            <div className="header_option">
              
                <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px' }}>
            {!isSmallScreenForUpper1?
            "Orders":
            isSmallScreen?(
              isSmallScreenForUpper?<></>:"Orders"
            ):<></>}
                </span>
            </div>
            </IconButton>
            </>
          </Link>

          {!isSmallScreen && (
            <>
              <Link to="/favourites" className="header_Link">
                <IconButton color="inherit" className="favourites-icon">
                  <Badge
                    badgeContent={favouriteItems?.length}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 20,
                      backgroundColor: '#FFAD33',
                      color: '#000000',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      zIndex: 1,
                    }}
                    badgeContentStyle={{ fontSize: '3rem' }}
                  />
                  <FavoriteBorderIcon />
                  {/* {!isSmallScreenForUpper1 ? <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px', marginLeft: '5px' }}>Favourites</span>
                  :<></>} */}
                  <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px', marginLeft: '5px' }}>Favourites</span>
                </IconButton>
              </Link>

              <Link to="/checkout" className="header_Link">
                <IconButton color="inherit" className="cart-icon">
                  <Badge
                    badgeContent={basket?.length}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 20,
                      backgroundColor: '#FFAD33',
                      color: '#000000',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      zIndex: 1,
                    }}
                    badgeContentStyle={{ fontSize: '2rem' }}
                  />
                  <ShoppingCartIcon />
                  {/* {!isSmallScreenForUpper1 ? <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px', marginLeft: '5px' }}>
                  Cart</span>
                  :<></>}                 */}
                  <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px', marginLeft: '5px' }}>Cart</span>
                  </IconButton>
              </Link>

              {userLoggedIn && (
                <IconButton color="inherit" onClick={logout} className="fav_cart">
                  <LogoutIcon />
                  {isSmallScreenForUpper1?
                  (isSmallScreen?
                  <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px' }}>Logout</span>:<></>
                  ):                  
                  <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px' }}>Logout</span>
}
                </IconButton>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
