import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SingleRecipe = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  return (
    <section className="container single_product_container">
      {product && (
        <div className="single_recipe_page">
          <img src={product.image} alt="" />
          <div className="product_description">
            <h3 className="product_title">{product.title}</h3>
            <strong>Price: </strong><h6>${product.price}</h6>
            <p><strong>Description</strong>:<br />{product.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleRecipe;
