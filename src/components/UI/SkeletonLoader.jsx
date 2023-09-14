import React from "react";
import { Grid, Skeleton, Card, CardContent } from "@mui/material";

const SkeletonLoader = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <>
      <Grid container>
        {data.map((product) => (
          <Grid item xs={12} sm={12} md={6} key={product.id}>
            <Card
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                marginBottom: "40px",
                marginRight: "60px",
              }}
            >
              <Skeleton
                component="img"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  marginTop: "10px",
                }}
              />
              <CardContent style={{ marginTop: "32px" }}>
                <Skeleton
                  width="200px"
                  height="20px"
                  style={{ marginBottom: "8px" }}
                />

                <Skeleton
                  width="200px"
                  height="20px"
                  style={{ marginBottom: "8px" }}
                />

                <Skeleton width="200px" height="20px" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkeletonLoader;
