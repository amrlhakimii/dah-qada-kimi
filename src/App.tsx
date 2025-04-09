import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure using the correct import path
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CircularProgress, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import theme from "./theme";
import { routes } from "./config/routes"; // Ensure routes are imported correctly
import { NotificationProvider } from "./contexts";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <NotificationProvider>
          <CssBaseline />
          <BrowserRouter>
            <Suspense
              fallback={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <CircularProgress />
                </Box>
              }
            >
              <Routes>
                {routes.map((route) => {
                  // For routes that aren't home, wrap with Layout
                  if (route.path !== "/") {
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={
                          <Layout>
                            <route.element />
                          </Layout>
                        }
                      />
                    );
                  } else {
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />} // Directly render element for home page
                      />
                    );
                  }
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </NotificationProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
