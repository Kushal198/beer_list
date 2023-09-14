import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    beerName: "",
    genre: "",
    description: "",
  });
  const handleNameChange = (event) => {
    const beerName = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      beerName,
    }));
  };

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      description,
    }));
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      genre,
    }));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({});
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        formData,
        handleDescriptionChange,
        handleNameChange,
        handleGenreChange,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
