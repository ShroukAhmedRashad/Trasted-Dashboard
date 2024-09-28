import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import {
  People,
  BarChart,
  AccessTime,
  ShoppingCart,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart as ReBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import SourceIcon from "@mui/icons-material/Source";
import "./Dashboard.css"; // Import the CSS file
import { green, purple } from "@mui/material/colors";
// Responsive Grid container style
const GridContainerStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

// InfoCard component with hover effect
const InfoCard = ({ title, value, icon, style }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="card" style={style}>
      {" "}
      {/* Apply the inline style here */}
      <CardContent>
        <Typography variant="h6" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography variant="h4" style={{ color: "white" }}>
          {value}
        </Typography>
        {icon && <Box>{icon}</Box>}
      </CardContent>
    </Card>
  </motion.div>
);

// Data for the charts
const visitsData = [
  { name: "Jan", visits: 4000 },
  { name: "Feb", visits: 3000 },
  { name: "Mar", visits: 2000 },
  { name: "Apr", visits: 2780 },
  { name: "May", visits: 1890 },
];

const revenueData = [
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2800 },
  { name: "Apr", revenue: 3500 },
];

const userDistributionData = [
  { name: "New Users", value: 400 },
  { name: "Main Users", value: 300 },
  { name: "Guest Users", value: 300 },
];

// Dashboard component
const Dashboard = () => (
  <>
    <Grid item xs={12} className="infoCardsText">
      <Typography
        className="dashboard-title"
        sx={{
          fontSize: 40,
          fontWeight: "bold",
          color: "#293241",
          mt: 8,
          textAlign: "center",
        }}
      >
        Dashboard Home
      </Typography>
    </Grid>
    <GridContainerStyle container spacing={2}>
      {/* Info Cards with Icons */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InfoCard
          title="Total Visits"
          value="12,345"
          icon={<People />}
          style={{ backgroundColor: "#ee6c4d", color: "white" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InfoCard
          title="Conversion Rate"
          value="30%"
          icon={<BarChart />}
          style={{ backgroundColor: "#3c6e71", color: "white" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InfoCard
          title="New Users"
          value="789"
          icon={<AccessTime />}
          style={{ backgroundColor: "#284b63", color: "white" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <InfoCard
          title="Most Used Courses"
          value="5"
          icon={<SourceIcon />}
          style={{ backgroundColor: "#293241", color: "white" }}
        />
      </Grid>
    </GridContainerStyle>
    
    {/* charts */}
    <Grid container spacing={2}>
      {/* Line Chart */}
      <Grid item xs={12} md={6}>
        <Card className="chart-card">
          <CardContent>
            <Typography variant="h6">Site Visits Over Time</Typography>
            <Divider />
            <LineChart width={500} height={300} data={visitsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </CardContent>
        </Card>
      </Grid>

      {/* New Bar Chart - Revenue by Month */}
      <Grid item xs={12} md={6}>
        <Card className="chart-card">
          <CardContent>
            <Typography variant="h5">Revenue by Month</Typography>
            <Divider />
            <ReBarChart width={300} height={300} data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#ee6c4d" />
            </ReBarChart>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);

export default Dashboard;
