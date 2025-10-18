// Login.js
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
import axios from "axios";
import { BASE_URL } from "../../config";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
       username: username.trim(),   // remove spaces
  password: password.trim()
      });

      if (res.status === 200) {
        alert("✅ Login successful!");
        // Redirect to deployed dashboard
window.location.href = "/dashboard";

      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Login failed! Check your username/password.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5">
          <form onSubmit={handleLogin}>
            {/* Username */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 4 }}>
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

            {/* Password */}
            <FormControl variant="standard" fullWidth sx={{ mb: 5 }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <IconButton
                type="submit"
                aria-label="fingerprint"
                color="success"
                sx={{ width: 80, height: 80 }}
              >
                <Fingerprint sx={{ fontSize: 60 }} />
              </IconButton>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
}
