import { useState, useEffect } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { FaRedo, FaPlus } from "react-icons/fa";

const ZikirCounter = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("zikirCount")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("zikirCount", count);
  }, [count]);

  return (
    <Paper 
      sx={{ 
        padding: 2, 
        textAlign: "left", 
        borderRadius: "12px", 
        backgroundColor: "#FFFFFF", 
        width: "180px" // Adjust width to make it a compact widget
      }}
    >
      <Typography 
        variant="body1" 
      >
        Zikir Counter
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ color: "#7F5AF0", fontWeight: "bold", textAlign: "left" }}
      >
        {count}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, marginTop: 2, justifyContent: "center" }}>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: "#7F5AF0", 
            color: "#ffffff", 
            minWidth: "40px", 
            padding: "6px", 
            '&:hover': { backgroundColor: "#5A3EBA" } 
          }}
          onClick={() => setCount(count + 1)}
        >
          <FaPlus />
        </Button>
        <Button 
          variant="outlined" 
          sx={{ 
            borderColor: "#7F5AF0", 
            color: "#7F5AF0", 
            minWidth: "40px", 
            padding: "6px",
            '&:hover': { backgroundColor: "#5A3EBA", color: "#ffffff" } 
          }}
          onClick={() => setCount(0)}
        >
          <FaRedo />
        </Button>
      </Box>
    </Paper>
  );
};

export default ZikirCounter;
