import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
import { Menu, MenuItem, TextField } from '@mui/material';

function Header() {
  const [{ basket }] = useStateValue();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState('');
  const [enteredPincode, setEnteredPincode] = useState('');

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

  // Handle pincode input change
  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  // Handle pincode submit
  const handlePincodeSubmit = (event) => {
    if (event.key === 'Enter') {
      setEnteredPincode(pincode);
      handleMenuClose(); // Close the menu
    }
  };

  return (
    <nav className='header'>
      {/* logo at left */}
      <Link to="/">
        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
      </Link>

      <Box sx={{ display: 'flex', alignItems: 'center', mr: 1, cursor: 'pointer' }} onClick={handleMenuOpen}>
        <LocationOnIcon />
        {!isSmallScreen && (
          <Typography variant="body1" sx={{ ml: 1 }}>
            {enteredPincode || 'Location'}
          </Typography>
        )}
      </Box>

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
        <MenuItem>
          <TextField
            label="Enter Pincode"
            variant="outlined"
            fullWidth
            value={pincode}
            onChange={handlePincodeChange}
            onKeyDown={handlePincodeSubmit}
          />
        </MenuItem>
      </Menu>

      {/* searchbar */}
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

      {/* Navigation links */}
      <div className="header_nav">
        {/* Account Link */}
        <Link to="/signin" className="header_Link">
          <div className="header_option">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
            ) : (
              <>
                <span className="header_optionLineOne">Hello Viswas</span>
                <span className="header_optionLineTwo">Your Account</span>
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

        <div className='fav_cart'>
          {/* Favorites Link */}
          <Link to="/favourites" className="header_Link">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <FavoriteBorderIcon />
              </IconButton>
            ) : (
              <div className="header_option_fav">
                <FavoriteBorderIcon />
                <Typography sx={{ ml: 1 }}>Favorites</Typography>
              </div>
            )}
          </Link>

          {/* Cart Link */}
          <Link to="/checkout" className="header_Link">
            {isSmallScreen ? (
              <IconButton color="inherit">
                <Badge badgeContent={basket?.length} color="error" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{ '& .MuiBadge-badge': { fontSize: '1.3rem', top: '50%', right: '-50%' } }}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : (
              <div className="header_option_fav">
                <ShoppingCartIcon />
                <Typography sx={{ ml: 1, mr: 2 }}>Cart</Typography>
                <Badge badgeContent={basket?.length} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{ '& .MuiBadge-badge': { fontSize: '1.3rem', top: '50%', right: '-50%' } }} />
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
