// React
import React from "react";
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/ProductsState";
// Components & Commons
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductsGrid";
// Hooks
import useAuth from "../hooks/useAuth";
// Material
import Paper from "@mui/material/Paper";
// Imgs

const Home = () => {
  const user = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((state) => state.products.productsList);

  const productsState = useSelector((state) => state.products);

  if (productsState.loading) {
    return <div>Loading...</div>;
  }
  if (productsState.error) {
    return <div>Error: {productsState.error}</div>;
  }

  return (
    <Paper
      sx={{
        bgcolor: "background.main",
      }}
    >
      <ProductsGrid products={products} />
      <Footer />
    </Paper>
  );
};

export default Home;
