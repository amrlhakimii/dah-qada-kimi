// src/pages/Profile.tsx
import { Box, Typography, Paper, Divider, TextField, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState<any>({
    name: "John Doe",
    email: "johndoe@example.com",
    birthdate: "1995-10-15",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    profilePicture: "/path/to/static/profile/pic.jpg", // Static profile picture
  });

  const [editing, setEditing] = useState(false); // Track if we are editing

  // Simulate fetching user data (Replace this with real data fetching)
  useEffect(() => {
    // Simulated user data (you can fetch this data from an API or database)
    // setUser({
    //   name: "John Doe",
    //   email: "johndoe@example.com",
    //   birthdate: "1995-10-15",
    //   phone: "+1234567890",
    //   address: "123 Main St, City, Country",
    // });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the changes (For now, we just stop editing)
    setEditing(false);
    // In a real app, you would save this data to a server or database
  };

  const handleEdit = () => {
    setEditing(true); // Enable editing
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Paper sx={{ padding: 4, width: 400, textAlign: "center" }}>
        {/* Profile Picture */}
        <Avatar
          alt="Profile Picture"
          src={user.profilePicture}
          sx={{ width: 100, height: 100, marginBottom: 2, marginLeft: "auto", marginRight: "auto" }}
        />

        <Typography variant="h5" gutterBottom>
          Profile
        </Typography>
        <Divider sx={{ margin: "20px 0" }} />
        
        {/* Editable Name */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={user.name}
          name="name"
          onChange={handleChange}
          disabled={!editing}
          sx={{ marginBottom: 2 }}
        />
        
        {/* Editable Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          name="email"
          onChange={handleChange}
          disabled={!editing}
          sx={{ marginBottom: 2 }}
        />
        
        {/* Editable Birthdate */}
        <TextField
          label="Birthdate"
          variant="outlined"
          fullWidth
          type="date"
          value={user.birthdate}
          name="birthdate"
          onChange={handleChange}
          disabled={!editing}
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        {/* Editable Phone */}
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          value={user.phone}
          name="phone"
          onChange={handleChange}
          disabled={!editing}
          sx={{ marginBottom: 2 }}
        />

        {/* Editable Address */}
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          value={user.address}
          name="address"
          onChange={handleChange}
          disabled={!editing}
          sx={{ marginBottom: 2 }}
        />

        {/* Save or Edit Button */}
        <Box sx={{ marginTop: 2 }}>
          {!editing ? (
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Edit
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleSave}>
              Save
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
