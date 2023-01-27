import axios from 'axios';
import { Box, CardFooter, Grid } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import CategoryCard from '../Components/CategoryCard';

export default function Homepage() {
  const [category, setCategory] = useState([]);
  const [breakpoints] = useState({
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  })

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
       setCategory(response.data)
      })
      .catch(function (error) {
        console.log("hello error");
      });
  }, []);

  return (
    <Box>
      <Navbar />
      <Grid p={'50px'} templateColumns={breakpoints} gap={6} >
      {
        category.map((e,i)=>(
            <CategoryCard key={i} cat={e} />
        ))
      }
      </Grid>
    </Box>
  );
}
