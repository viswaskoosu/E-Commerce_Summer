import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
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

const Header = () => {
  const [{ basket, favouriteItems, user, userLoggedIn }] = useStateValue();
  const [state, dispatch] = useStateValue();
  // console.log(state)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

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

  const renderAddress = (address) => (
    <Box>
      <Typography variant="body1">{address.name}</Typography>
      <Typography variant="body2">{`${address.city}, ${address.zip}`}</Typography>
    </Box>
  );
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("basket");

    dispatch({
      type: "USER_LOGOUT",
    });
    navigate('/')
  };
  // const userExists = () =>{
  //   return localStorage.getItem('user')
  // }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <Box
        sx={{ display: "flex", alignItems: "center", mr: 1, cursor: "pointer" }}
        onClick={handleMenuOpen}
      >
        <LocationOnIcon />
        {!isSmallScreen && (
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
          <div className="header_option">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
            ) : (
              <>
                <span className="header_optionLineOne">
                  {userLoggedIn ? `Hello ${user.displayName}` : "Hello Guest"}
                </span>
                <span className="header_optionLineTwo">
                  {userLoggedIn ? "Your Account" : "Sign In"}
                </span>
              </>
            )}
          </div>
        </Link>

        <Link to="/orderhistory" className="header_Link">
          <div className="header_option">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <ShoppingBagIcon />
              </IconButton>
            ) : (
              <>
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Orders</span>
              </>
            )}
          </div>
        </Link>

        <div className="fav_cart">
          <Link to="/favourites" className="header_Link">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <Badge
                  badgeContent={favouriteItems?.length}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "1.3rem",
                      top: "50%",
                      right: "-50%",
                    },
                  }}
                >
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
            ) : (
              <div className="header_option_fav">
                <Typography sx={{ ml: 1 }}>Favorites</Typography>
                <IconButton color="inherit">
                  <Badge
                    badgeContent={favouriteItems?.length}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: "1.3rem",
                        top: "50%",
                        right: "-50%",
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Link>
          <Link to="/checkout" className="header_Link">
            <IconButton color="inherit">
              <Badge
                badgeContent={basket?.length}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "1.3rem",
                    top: "50%",
                    right: "-50%",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          {userLoggedIn? (
          <IconButton color="inherit" onClick={logout}>
            <Badge
              badgeContent={basket?.length}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "1.3rem",
                  top: "50%",
                  right: "-50%",
                },
              }}
            >
              <LogoutIcon />
            </Badge>
          </IconButton>
          ) : (<></>)}
        </div>
      </div>
    </nav>
  );
};

export default Header;
