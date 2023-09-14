import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = ({ data }) => {
  return (
    <>
      <Grid container>
        {data.map((product) => (
          <Grid item xs={12} sm={12} md={6} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
