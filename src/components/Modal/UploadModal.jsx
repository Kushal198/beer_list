import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import { toast } from "react-toastify";
import houzzBeer from "../../assets/houzz-beer.png";
import { useModalContext } from "../../context/ModalContext";

const UploadModal = ({ isOpen, onClose }) => {
  const {
    formData,
    handleDescriptionChange,
    handleNameChange,
    handleGenreChange,
  } = useModalContext();

  // Retrieve existing data from localStorage
  const existingData = JSON.parse(localStorage.getItem("modalData")) || [];

  // Function to generate a new ID
  const generateNewId = () => {
    const maxId = existingData.reduce(
      (max, item) => (item.id > max ? item.id : max),
      0
    );
    return maxId + 1;
  };

  // Create a new item with a generated ID
  const newItem = {
    id: generateNewId(),
    name: formData.beerName,
    tagline: formData.genre,
    description: formData.description,
  };

  // Add the new item to the existing data
  existingData.push(newItem);

  const handleSave = () => {
    if (
      !formData ||
      !formData.beerName ||
      !formData.genre ||
      !formData.description
    ) {
      toast.error("Fields cannot be empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
      return;
    }
    // Store the form data in local storage
    localStorage.setItem("modalData", JSON.stringify(existingData));
    onClose();
    toast.success("Custom Beer Added Successfully");
  };

  return (
    //Upload CustomBeer Modal
    <Modal open={isOpen} onClose={onClose}>
      <Paper>
        <Paper
          style={{
            position: "absolute",
            width: "500px",
            backgroundColor: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom fontFamily="Montserrat">
            Add a New Beer
          </Typography>
          <Box display="flex" flexDirection="column">
            <label htmlFor="image-upload">
              <img
                src={houzzBeer}
                alt="Image Preview"
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
            </label>
            <TextField
              label="Beer Name*"
              variant="outlined"
              value={formData.beerName}
              onChange={handleNameChange}
              style={{ marginTop: "10px" }}
            />
            <TextField
              label="Genre*"
              variant="outlined"
              value={formData.genre}
              onChange={handleGenreChange}
              style={{ marginTop: "10px" }}
            />
            <TextField
              label="Description*"
              variant="outlined"
              value={formData.description}
              onChange={handleDescriptionChange}
              style={{ marginTop: "10px" }}
            />
            <Grid marginTop="15px" container justifyContent="flex-end">
              <Button
                variant="inherit"
                onClick={onClose}
                style={{ marginRight: "10px" }}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Paper>
    </Modal>
  );
};

export default UploadModal;
