import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Box, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import ProductList from "../components/UI/ProductList";
import { useQuery } from "react-query";
import SkeletonLoader from "../components/UI/SkeletonLoader";

async function fetchItems({ page, perPage }) {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6&page=${page}&per_page=${perPage}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

const Home = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isError, isFetching } = useQuery(
    ["items", page],
    () => fetchItems({ page, perPage }),
    {
      keepPreviousData: true,
    }
  );

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg">
        <SkeletonLoader />
      </Container>
    );
  }
  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <Helmet title="Home">
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="600px"
        >
          <div>
            <ProductList data={data} />
            {isFetching ? <div>Loading more...</div> : null}
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={loadMore}
                disabled={isFetching}
                style={{ textTransform: "unset" }}
              >
                Load More <KeyboardArrowDown />
              </Button>
            </div>
          </div>
        </Box>
      </Container>
    </Helmet>
  );
};

export default Home;
