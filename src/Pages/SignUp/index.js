import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useHistory} from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios'
import Cookies from 'js-cookie'
// Create a custom theme with the desired color scheme
const signUpTheme = createTheme({
  palette: {
    primary: {
      main: '#FFAD33', // Main color for primary elements
    },
    textPrimary: {
      main: '#000000', // Adjust text primary color
    },
  },
});
// const signUp = event => {
//   event.preventDefault();//prevent refresh
//   // do register logic
//   console.log(1)

// }
export default function SignUp() {
  const history = useHistory()
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const removeErrorMessage = (e) => {
      if (e.target.id==="email"){
        setEmailError(false)
      }
      if (e.target.id==="firstName"){
        setFirstNameError(false)
      }if (e.target.id==="lastName"){
        setLastNameError(false)
      }if (e.target.id==="password"){
        setPasswordError(false)
      }
  }

  const checkForm = (data) => {
    let check = false
    const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailregex.test(data.get('email'))){
      setEmailError('Invalid email')
      check = check || true
      // console.log(emailError)
    }else{
      setEmailError(false)
    }
    if (data.get('password').length<6){
      check = check || true
      setPasswordError('Password must be atleast 6 characters')
    }else{
      setPasswordError(false)
    }
    if (data.get('firstName').length===0){
      check = check || true
      setFirstNameError('Invalid name')
    }else{
      setFirstNameError(false)
    }
    if (data.get('lastName').length===0){
      check = check || true
      setLastNameError('Invalid name')
    }else{
      setLastNameError(false)
    }
    return check
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (checkForm(data)) return 

    const userData = {
      name: data.get('firstName') + " " + data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      allowExtraEmails: data.get('allowExtraEmails') === 'on',
    }
    // console.log(userData);
    await axios.post('http://localhost:4000/user/signup', userData)
    .then(response => {
      // console.log(response.data)
      if (response.data.success)
        // Cookies.set("token", response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        alert("Signed up successfully")
        history.push('/')
    })
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.error) { alert("Couldn't signup "+ error.response.data.error) }
      else alert("Couldn't sign up (Server error)")
    })
    // Redirect or handle form submission logic here
  };

  return (
    <ThemeProvider theme={signUpTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: signUpTheme.palette.primary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={firstNameError}
                  helperText={firstNameError}
                  onChange={removeErrorMessage}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={lastNameError}
                  helperText={lastNameError}
                  onChange={removeErrorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputProps={{
                    type: "email",
                  }}
                  error={emailError}
                  helperText={emailError}
                  onChange={removeErrorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={passwordError}
                  helperText={passwordError}
                  onChange={removeErrorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: signUpTheme.palette.primary.main, color: signUpTheme.palette.textPrimary.main }}
              // onClick={signUp}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body2" color="textPrimary" underline="none">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
