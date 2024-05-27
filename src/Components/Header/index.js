import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { useStateValue } from '../../Context/StateProvider';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Menu, MenuItem } from '@mui/material';

function Header() {
  const [{ basket, favouriteItems, user }] = useStateValue();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null); // Define selectedAddress state
  const history = useHistory();

  // Function to check screen size on resize
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 800); // Adjust the breakpoint as needed
  };

  // Add event listener on component mount
  useEffect(() => {
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Add listener for resize
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on unmount
    };
  }, []);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle address change
  const handleAddressChange = (address) => {
    setSelectedAddress(address);
    handleMenuClose();
  };

  // Redirect to addresses page
  const handleAddNewAddress = () => {
    history.push('/addresses');
    handleMenuClose();
  };

  // Render address with name in one row and city, pincode in the next row
  const renderAddress = (address) => (
    <div>
      <Typography variant="body1">{address.name}</Typography>
      <Typography variant="body2">{`${address.city}, ${address.zip}`}</Typography>
    </div>
  );

  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>

      {/* Location and Address Selection */}
      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1, cursor: 'pointer' }} onClick={handleMenuOpen}>
        <LocationOnIcon />
        {!isSmallScreen && (
          <Typography variant="body1" sx={{ ml: 1 }}>
            {selectedAddress ? renderAddress(selectedAddress) : 'Select Address'}
          </Typography>
        )}
      </Box>

      {/* Menu for Address Selection */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: '200px',
            width: '300px',
          },
        }}
      >
        {user?.addresses?.slice(0, 3).map((address, index) => (
          <MenuItem key={index} onClick={() => handleAddressChange(address)}>
            {renderAddress(address)}
          </MenuItem>
        ))}
        {user?.addresses?.length > 3 && (
          <MenuItem onClick={handleAddNewAddress}>
            View All Addresses
          </MenuItem>
        )}
        <MenuItem onClick={handleAddNewAddress}>
          Add New Address
        </MenuItem>
      </Menu>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', ml: 1, minWidth: 0 }}>
        <InputBase
          placeholder="Search for Products, Brands and More"
          inputProps={{ 'aria-label': 'search' }}
          sx={{
            color: 'inherit',
            backgroundColor: 'white',
            borderRadius: 1,
            pl: 2,
            pr: 2,
            width: '100%', // Ensure search bar takes remaining space
          }}
        />
        <IconButton type="submit" sx={{ p: '10px', ml: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <div className="header_nav">
        {/* Account Link */}
        <Link to={user ? '/account' : '/signin'} className="header_Link">
          <div className="header_option">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
            ) : (
              <>
                <span className="header_optionLineOne">{user ? `Hello ${user.displayName}` : 'Hello Guest'}</span>
                <span className="header_optionLineTwo">{user ? 'Your Account' : 'Sign In'}</span>
              </>
            )}
          </div>
        </Link>

        {/* Returns & Orders Link */}
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

        {/* Favorites and Cart Links */}
        <div className='fav_cart'>
          {/* Favorites Link */}
          <Link to="/favourites" className="header_Link">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <Badge
                  badgeContent={favouriteItems?.length}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{ '& .MuiBadge-badge': { fontSize: '1.3rem', top: '50%', right: '-50%' } }}
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
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    sx={{ '& .MuiBadge-badge': { fontSize: '1.3rem', top: '50%', right: '-50%' } }}
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Link>

          {/* Cart Link */}
          <Link to="/checkout" className="header_Link">
            <IconButton color="inherit">
              <Badge
                badgeContent={basket?.length}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ '& .MuiBadge-badge': { fontSize: '1.3rem', top: '50%', right: '-50%' } }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
