// Hero.js (Signup Page)

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config"; // "https://cashcurve.onrender.com"

export default function Hero() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/signup`, {
        username,
        email,
        password, // plain password, hashing handled in backend
      });

      if (res.status === 201) {
        alert("✅ Signup successful!");

        // Redirect to deployed dashboard
      window.location.href = "/dashboard";

      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Signup failed!");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5">
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
              <AccountCircle sx={{ color: 'gray', mr: 1, my: 0.5 }} />
              <TextField
                id="username"
                label="Username"
                variant="standard"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 3 }}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>

            {/* Password */}
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            {/* Fingerprint Button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <IconButton
                type="submit"
                aria-label="fingerprint"
                color="success"
                sx={{ fontSize: 60 }}
              >
                <Fingerprint sx={{ fontSize: 60 }} />
              </IconButton>
            </Box>

            {/* Login link */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Link to="/login" className="text-center" style={{ textDecoration: "none" }}>
                Already have an account? Login
              </Link>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}
