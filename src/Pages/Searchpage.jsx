import { Box, Button, Grid, Input } from "@chakra-ui/react";
import axios from "axios";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import ProductCart from "../Components/ProductCart";

export default function Searchpage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [num, setnum] = useState(0);
  const [breakpoints] = useState({
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });
  function Searchbtn() {
    console.log(search);
    axios
      .get("https://dummyjson.com/products/search?q=" + search)
      .then((response) => setData(response.data.products));
    setnum(1);
  }

  return (
    <Box>
      <Navbar />
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"100px"}
      >
        <Input
          onChange={(e) => setSearch(e.target.value)}
          w={"40%"}
          type="text"
          variant="filled"
          placeholder="search.."
        />
        <Button
          isDisabled={!search}
          onClick={Searchbtn}
          leftIcon={<Search2Icon />}
          colorScheme="blue"
          variant="solid"
        >
          search..
        </Button>
      </Box>

      <Grid
        pt={"70px"}
        pr={"80px"}
        pl={"80px"}
        templateColumns={breakpoints}
        gap={"50px"}
      >
        {data.length > 0 || num === 0 ? (
          data.map((e, i) => <ProductCart {...e} key={i} />)
        ) : (
          <Box
            w={"320%"}
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={"25px"}
          >
            Oops! NO Result available
          </Box>
        )}
      </Grid>
    </Box>
  );
}
