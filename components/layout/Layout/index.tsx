import { ReactNode } from "react";
import { Box, Container, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { AppBar } from "../AppBar";
import * as React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {/* Profile button */}
        <ListItem
          component={Link}
          to="/profile"
          sx={{
            "&:hover": {
              backgroundColor: "#7F5AF0", // Purple highlight on hover
              color: "white", // Change text color to white on hover
            },
          }}
        >
          <ListItemText primary="Profile" />
        </ListItem>

        {/* Home button */}
        <ListItem
          component={Link}
          to="/"
          sx={{
            "&:hover": {
              backgroundColor: "#7F5AF0", // Purple highlight on hover
              color: "white", // Change text color to white on hover
            },
          }}
        >
          <ListItemText primary="Home" />
        </ListItem>

        {/* Settings button */}
        <ListItem
          component={Link}
          to="/settings"
          sx={{
            "&:hover": {
              backgroundColor: "#7F5AF0", // Purple highlight on hover
              color: "white", // Change text color to white on hover
            },
          }}
        >
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar toggleDrawer={() => setOpen((prev) => !prev)} />
      <Container sx={{ py: 3 }}>{children}</Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};
