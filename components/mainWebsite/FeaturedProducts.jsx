"use client";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import AnimatedSection from "./Animation";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const ProductCard = ({ name, description, imageUrl, website }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full sm:w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image Section */}
        <div className="relative h-48 bg-gray-50 overflow-hidden">
          <img
            src="/images/Home.jpg"
            alt={`${name} Preview`}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white rounded-full p-2 shadow-md">
              <img
                src="/images/trarrk.jpg"
                alt={`${name} Logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-heading mb-3">{name}</h3>
          <p className="text-heading opacity-70 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Footer Section */}
          <div className="flex items-center justify-between">
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-sm font-medium">
              Learn More
            </button>
          </div>
        </div>
      </a>
    </motion.div>
  );

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
            <div className="flex flex-wrap justify-start gap-6 lg:gap-8">
              {children}
            </div>
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

  // Sample product data
  const trarrkProduct = {
    name: "Trarrk",
    description:
      "Transforming Special Education with AI-powered Insights. Smart progress tracking connecting schools, parents & caregivers.",
    imageUrl: "/images/trarrk.jpg",
    website: "https://www.trarrk.com",
  };

  return (
    <AnimatedSection>
      <section className="container mx-auto lg:w-11/12 px-4 py-12">
        <h1 className="text-center text-2xl md:text-4xl font-bold tracking-wide text-heading mb-8">
          Our Featured Products
        </h1>

        {/* Mobile viewport */}
        <div className="lg:hidden">
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", color: "#66328E" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="product categories"
                textColor="secondary"
                indicatorColor="secondary"
                sx={{ fontSize: "1rem", fontWeight: "500" }}
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Vision Devices" {...a11yProps(1)} />
                <Tab label="Mobility Devices" {...a11yProps(2)} />
                <Tab label="Hearing Aids" {...a11yProps(3)} />
                <Tab label="Cognitive Supports" {...a11yProps(4)} />
                <Tab label="Speech Devices" {...a11yProps(5)} />
                <Tab label="Assistive Apps" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ProductCard {...trarrkProduct} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              <ProductCard {...trarrkProduct} />
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
                aria-label="product categories"
                textColor="secondary"
                indicatorColor="secondary"
                sx={{ fontSize: "1rem", fontWeight: "500" }}
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Vision Devices" {...a11yProps(1)} />
                <Tab label="Mobility Devices" {...a11yProps(2)} />
                <Tab label="Hearing Aids" {...a11yProps(3)} />
                <Tab label="Cognitive Supports" {...a11yProps(4)} />
                <Tab label="Speech Devices" {...a11yProps(5)} />
                <Tab label="Assistive Apps" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ProductCard {...trarrkProduct} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <p className="text-center text-gray-500">Coming Soon...</p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              <ProductCard {...trarrkProduct} />
            </CustomTabPanel>
          </Box>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FeaturedProducts;
