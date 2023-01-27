import { Box } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      boxShadow={"2xl"}
      w={"100%"}
      h={"80px"}
      border={"1px solid black"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bg={"blue.300"}
      fontSize={"23px"}
      color={"white"}
    >
      <Box onClick={() => navigate("/")} cursor={"pointer"}>
        Navbar
      </Box>
      <Box onClick={() => navigate("/search")} cursor={"pointer"}>
        Search
      </Box>
    </Box>
  );
}
