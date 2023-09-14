import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Box, Typography, Button } from "@mui/material";
import ProductList from "../components/UI/ProductList";
import { useModalContext } from "../context/ModalContext";

const CustomBeer = () => {
  const customData = JSON.parse(localStorage.getItem("modalData")) || [];

  const { openModal } = useModalContext();

  return (
    <Helmet title="Custom Beer">
      <Container maxWidth="lg">
        {customData.length === 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="600px"
            bgcolor="#f0f0f0"
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "300",
                fontSize: "16px",
                textAlign: "center",
                color: "#696969",
                marginBottom: "180px",
              }}
            >
              Nothing to see yet
              <br />
              <Button
                onClick={openModal}
                style={{
                  textDecoration: "none",
                  textTransform: "none",
                  color: "#4A82C8",
                  fontWeight: "400",
                }}
              >
                Click here
              </Button>{" "}
              to add your first item
            </Typography>
          </Box>
        ) : (
          <ProductList data={customData} />
        )}
      </Container>
    </Helmet>
  );
};

export default CustomBeer;
