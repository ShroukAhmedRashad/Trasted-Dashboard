import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
  IconButton,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddNewUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // New state for role
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSnackbarOpen(false);

    if (!username || !email || !password || !role) { // Validate role
      setSnackbarMessage("All fields are required.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (!validateEmail(email)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (password.length < 6) {
      setSnackbarMessage("Password should be at least 6 characters long.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // Logic to add the new user
    console.log("New user added:", { username, email, password, role });

    // Display success message
    setSnackbarMessage("User added successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);

    // Reset fields
    setUsername("");
    setEmail("");
    setPassword("");
    setRole(""); // Reset role
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 4,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: 28, md: 36 },
            fontWeight: "bold",
            color: "#293241",
            m: "auto",
          }}
        >
          Add New User
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />   
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="editor">Instructor</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  borderRadius: "8px",
                  width: "300px",
                  bgcolor: "#ee6c4d",
                  "&:hover": {
                    bgcolor: "#ee6c4d",
                    boxShadow: "none",
                  },
                }}
              >
                Add User
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddNewUser;
