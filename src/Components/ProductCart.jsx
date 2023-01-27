import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function ProductCart({ images, title, description, price }) {
  return (
    <Box
      boxShadow={"xl"}
      p={"15px"}
      borderRadius={"20px"}
      border={"1px solid black"}
    >
      <Box w={"100%"} h={"180px"} margin={"auto"}>
        <Image h={"100%"} w={"100%"} src={images[0]} />
      </Box>
      <Box
        textAlign={"center"}
        mt={"10px"}
        fontSize={"21px"}
        fontWeight={"500"}
      >
        {title}
      </Box>
      <Box textAlign={"center"} mt={"5px"}>
        {description}
      </Box>
      <Box textAlign={"center"} fontSize={"18px"} mt={"5px"}>
        Price:- {price}/-
      </Box>
    </Box>
  );
}
