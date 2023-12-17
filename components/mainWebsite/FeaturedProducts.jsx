"use client";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FeaturedProducts = () => {
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flex flex-col gap-4 mt-[2.5rem] md:mt-[5rem]">
      <h1 className="text-center text-[1.25rem] md:text-[2rem] font-bold tracking-wider md:tracking-[0.08rem] text-heading">
        Our Featured Products
      </h1>
      {/* Mobile viewport */}
      <div className=" lg:hidden">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", color: "#66328E" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="basic tabs example"
              textColor="#252128"
              indicatorColor="secondary"
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Vision Devices" {...a11yProps(1)} />
              <Tab label="Mobility Devices" {...a11yProps(2)} />
              <Tab label="Hearing Aids" {...a11yProps(3)} />
              <Tab label="Cognitive Supports" {...a11yProps(4)} />
              <Tab label="Speech Devices" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Four
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Five
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item Six
          </CustomTabPanel>
        </Box>
      </div>
      {/* Larger Viewport */}
      <div className="hidden lg:block">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", color: "#66328E" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="basic tabs example"
              textColor="#252128"
              indicatorColor="secondary"
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Vision Devices" {...a11yProps(1)} />
              <Tab label="Mobility Devices" {...a11yProps(2)} />
              <Tab label="Hearing Aids" {...a11yProps(3)} />
              <Tab label="Cognitive Supports" {...a11yProps(4)} />
              <Tab label="Speech Devices" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Four
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Five
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item Six
          </CustomTabPanel>
        </Box>
      </div>
    </section>
  );
};

export default FeaturedProducts;
