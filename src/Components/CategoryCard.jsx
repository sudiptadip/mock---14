import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ cat }) {
  const navigate = useNavigate();
  function addData() {
    localStorage.setItem("category", cat);
    navigate("/product");
  }
  return (
    <Box
      h={"70px"}
      fontSize={"20px"}
      textAlign={"center"}
      border={"1px solid black"}
      pt={"17px"}
      fontWeight={500}
      boxShadow={"xl"}
      cursor={"pointer"}
      onClick={() => addData()}
    >
      {cat}
    </Box>
  );
}
