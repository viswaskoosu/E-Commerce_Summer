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
const LowerHeader = () => {  
    const [{ basket, favouriteItems, user, userLoggedIn }] = useStateValue();
  console.log(user)
  const [state, dispatch] = useStateValue();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800); // Adjust the threshold as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  // console.log((user && user.currentAddress && user.currentAddress!==-1))

  const [selectedAddress, setSelectedAddress] = useState((user && user.currentAddress!==undefined && user.currentAddress!==-1)? user.addresses[user.currentAddress] : null);
  const [isLoading, setIsLoading] = useState(false) //useless
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedAddress((user && user.currentAddress!==undefined && user.currentAddress!==-1)? user.addresses[user.currentAddress] : null)
  }, [user.addresses]);
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 800);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  return (
    <div className="lowerHeader" style={{display:'flex'}}>
      <Link to="/favourites" className="header_Link">
          <IconButton color="inherit" className="favourites-icon">
            <Badge
              badgeContent={favouriteItems?.length}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                position: 'absolute',
                top: 8,
                left: 20,
                backgroundColor: '#FFAD33', // Customize badge background color
                color: '#000000', // Customize badge text color
                fontFamily: 'Poppins', // Customize badge font family
                fontWeight: '600', // Customize badge font weight
                zIndex: 1, // Ensure badge appears on top of icon
              }}
              badgeContentStyle={{ fontSize: '3rem' }} // Specify badge content font size
            />
            <FavoriteBorderIcon />
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
                backgroundColor: '#FFAD33', // Customize badge background color
                color: '#000000', // Customize badge text color
                fontFamily: 'Poppins', // Customize badge font family
                fontWeight: '600', // Customize badge font weight
                zIndex: 1, // Ensure badge appears on top of icon
              }}
              badgeContentStyle={{ fontSize: '2rem' }} // Specify badge content font size
            />
            <ShoppingCartIcon />
            <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px', marginLeft: '5px' }}>Cart</span>
          </IconButton>
        </Link>


        {userLoggedIn ? (
          <IconButton color="inherit" onClick={logout} className="fav_cart">
            <LogoutIcon />

            <span style={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '18px' }}>Logout</span>


          </IconButton>
        ) : (<></>)}
    </div>
  )
}

export default LowerHeader
