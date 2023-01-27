import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductCart from "./ProductCart";

export default function Product() {
  const [cat, setCat] = useState(localStorage.getItem("category") || "k");
  const [data, setData] = useState([]);
  const [breakpoints] = useState({
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/" + cat)
      .then((e) => setData(e.data.products));
  }, []);

  return (
    <Box>
      <Navbar />
      <Grid
        pt={"70px"}
        pr={"80px"}
        pl={"80px"}
        templateColumns={breakpoints}
        gap={"50px"}
      >
        {data.map((e, i) => (
          <ProductCart {...e} key={i} />
        ))}
      </Grid>
    </Box>
  );
}
