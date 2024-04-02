
import React, { useState } from 'react';
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";


function App() {
  const [value, setValue] = useState<number>(30);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    updateTheme(!darkMode); // Invert dark mode state
  };

  const updateTheme = (isDarkMode: boolean) => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#1e1e1e');
      root.style.setProperty('--text-color', 'white');
    } else {
      root.style.setProperty('--bg-color', 'white');
      root.style.setProperty('--text-color', 'black');
    }
  };

  return (
    <Box className={`App ${darkMode ? 'dark-mode' : ''}`}>
      
      <Box className="dark-mode-toggle">
        <Button variant="contained" color="primary" onClick={handleDarkModeToggle}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </Box>

    <Box className="upper-half">



    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography
        sx={{
          lineHeight: "2rem",
          fontSize: "1.6rem",
          fontWeight: 600,
          padding: "6rem 0 0.7rem 0",
          
        }}
      >
        Simple, traffic based pricing
      </Typography>
      <Typography
        sx={{
          padding: "0 0 4.5rem 0",
          maxWidth: {
            xs: "50%",
            lg: "80%",
            color: 'grey',
          },
        }}
      >
        Sign up for 30-day trial. No credit card required.
      </Typography>
      <Card sx={{ minWidth: "35vw" }}>
        <Box sx={{ mx: "3rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem 0 0.5rem 0",
              
            }}
          >
            <Typography sx={{color: 'grey',}}>100K PAGEVIEWS</Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  lineHeight: "1rem",
                  fontSize: "2.7rem",
                  fontWeight: 600,
                }}
              >
                $16.00
              </Typography>
              <Typography sx={{ padding: "0 0 0 0.5rem", color: 'grey', }}>/month</Typography>
            </Typography>
          </Box>
          <Box>
            <Slider
              aria-label="Volume"
              value={value}
              onChange={handleChange}
              sx={{ color: "#A9EBDF", padding: "3rem 0 0 0" }}
            />
          </Box>

          
          

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 0 2.5rem 0",
              color: 'grey',
            }}
          >
            <Typography>Monthly Billing</Typography>
            <Switch />
            <Typography>Yearly Billing</Typography>
            <Typography
              sx={{
                color: "red",
                borderRadius: "2rem",
                mx: "1rem",
                background: "#FFE5E4",
                padding: "0.1rem 0.5rem 0.1rem 0.5rem ",
              }}
            >
              25% discount
            </Typography>
          </Box>
        </Box>
        
      </Card>


      <Card sx={{ minWidth: "35vw" }}>
        <Box
          sx={{
            mx: "3rem",
            padding: "1.5rem 0 0 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center", // Added align-items: center
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem", color: 'grey', }}> Unlimited websites</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem", color: 'grey', }}> 100% data ownership</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "1.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem", color:'grey' }}> Email reports</Typography>
            </Box>
          </Box>
   <Box
  sx={{
    bgcolor: "#000435",
    width: "10rem",
    borderRadius: "8rem",
    textAlign: "center",
    color: "white", 
  }}
>
  <Button className="centered-button" 
  variant="text" 
  sx={{ color: 'white', textTransform: 'none' }}
  >Start my trial</Button>
</Box>

        </Box>
      </Card>
    </Box>
    </Box>
    </Box>
  );
}

export default App;


