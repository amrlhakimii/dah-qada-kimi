// src/components/layout/AppBar/index.tsx
import {
  AppBar as AppBarMUI,
  Typography,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export const AppBar = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleProfileClick = () => {
    // Navigate to the Profile page immediately when the icon is clicked
    navigate("/profile");
  };

  const handleHomeClick = () => {
    // Navigate to the Home page when "Dah Qada?" text is clicked
    navigate("/");
  };

  return (
    <AppBarMUI position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side: Menu icon and Dah Qada text */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color="inherit"
            sx={{ textTransform: "none" }} // Remove uppercasing of text
            onClick={handleHomeClick} // Navigate to home when clicked
          >
            <Typography variant="h6" component="div">
              Dah Qada?
            </Typography>
          </Button>
        </div>

        {/* Right side: Profile icon */}
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleProfileClick} // Navigate to the profile page directly
          color="inherit"
          edge="end"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBarMUI>
  );
};
