import {
  Typography,
  CardContent,
  CardMedia,
  Card,
  Tooltip,
} from "@mui/material";
import React from "react";
import houzzBeer from "../../assets/houzz-beer.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "transform 0.2s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F3F8FC",
    },
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    transition: "transform 0.5s ease-in-out",
  },
  imageRotate: {
    transform: "rotate(360deg)",
    transitionDelay: "0.3s",
  },
}));

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};

const ProductCard = ({ product }) => {
  const [isImageRotated, setIsImageRotated] = React.useState(false);

  const handleImageHover = () => {
    setIsImageRotated(true);
  };

  const handleImageLeave = () => {
    setIsImageRotated(false);
  };

  const classes = useStyles();
  const truncatedDescription = truncateText(product.description, 75);

  return (
    <Card
      className={`${classes.card}`}
      onMouseEnter={handleImageHover}
      onMouseLeave={handleImageLeave}
      sx={{
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "15px",
        marginBottom: "40px",
        marginRight: "60px",
        minHeight: "220px",
      }}
    >
      <Tooltip title={product.description} placement="bottom">
        <CardMedia
          className={`${classes.image} ${
            isImageRotated ? classes.imageRotate : ""
          }`}
          component="img"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            marginTop: "10px",
          }}
          image={product.image_url ? product.image_url : houzzBeer}
          alt={product.title}
        />
      </Tooltip>
      <CardContent>
        <Typography
          fontFamily="Montserrat"
          variant="h6"
          style={{ marginBottom: "12px" }}
        >
          {product.name}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          variant="body2"
          fontWeight="600"
          color="#DDAE54"
          style={{ marginBottom: "12px" }}
        >
          {product.tagline}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          variant="body1"
          style={{ marginBottom: "12px" }}
        >
          {truncatedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
