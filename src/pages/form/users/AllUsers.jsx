import { Box, Typography } from "@mui/material";
import { GridToolbarQuickFilter } from "@mui/x-data-grid/components";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import GroupIcon from "@mui/icons-material/Group";

export default function Contacts() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Full width
          height: "100vh", // Full viewport height
          mt: 8,
        }}
      >
        {/* Box to align icon and text horizontally */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <GroupIcon sx={{ fontSize: 40, color: "#293241", mt: 10 }} />
          <Typography
            sx={{ fontSize: 40, fontWeight: "bold", color: "#293241" , mt:10 }}
          >
            Users
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '50%' }, // Responsive widths
            maxWidth: 800, // Set maximum width
            boxShadow: 3, // Shadow for the table
          }}
        >
          <DataGrid
            slots={{ toolbar: GridToolbarQuickFilter }} // Keeping the filter in the toolbar
            rows={rows}
            columns={columns}
            autoHeight
            checkboxSelection
            disableSelectionOnClick
            sx={{
              "& .MuiInputBase-root": {
                color: "#293241",
              },
              "& .MuiDataGrid-columnHeaders": {
                color: "#293241", // Header text color
                fontSize: 16,
              },
              "& .MuiDataGrid-cell": {
                color: "#293241", // Cell text color
                fontSize: 14,
              },
            }}
          />
        </Box>
      </Box>
    </div>
  );
}
