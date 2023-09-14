import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import { useModalContext } from "../../context/ModalContext";
import UploadModal from "../Modal/UploadModal";

const Header = () => {
  const { isModalOpen, closeModal, openModal } = useModalContext();

  return (
    <Box sx={{ padding: "35px" }}>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#333" : "#545e6f",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "400",
                marginRight: "20px",
              })}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              All Beers
            </NavLink>
            <NavLink
              to="/my-beers"
              style={({ isActive }) => ({
                color: isActive ? "#333" : "#545e6f",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "400",
              })}
            >
              My Beers
            </NavLink>
          </Box>
          <div>
            <Button variant="contained" onClick={openModal}>
              Add a new beer
            </Button>
            <UploadModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Header;
