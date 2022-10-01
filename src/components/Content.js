import React, { useEffect, useState } from "react";
import Card from "./Card";
import SmallCard from "./SmallCard";
import axios from "axios";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Content = () => {
  const [products, setProducts] = useState([]);
  const [popularProduct, setPopularProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumberEnd, setPageNumberEnd] = useState(5);
  const [pageNumberStart, setPageNumberStart] = useState(0);
  const [pageLocationNum, setPageLocationNum] = useState(0)

  const handlePageChange = (position) => {
    if(position === "next") {
      setPageNumberStart(pageNumberStart + 5);
      setPageNumberEnd(pageNumberEnd + 5);
      setPageLocationNum(pageNumberEnd);
    }
    if(position === "prev") {
      setPageNumberStart(pageNumberStart - 5);
      setPageNumberEnd(pageNumberEnd - 5);
      setPageLocationNum(pageNumberEnd);
    }
  }

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchPopularProducts = async () => {
    setLoading(true);
    try {
      const pop = await axios.get("https://fakestoreapi.com/products?limit=5");
      setPopularProduct(pop.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchPopularProducts();
  }, []);

  return (
    <section className="container content_container">
      <div className="main_content">
        <h3 className="section_title">Products</h3>
        {loading ? (
          <h3 style={{ textAlign: "center" }}>Loading...</h3>
        ) : (
          products.slice(pageNumberStart, pageNumberEnd).map((product) => (
            <Card product={product} key={product.title} />
          ))
        )}
        {!loading && <div className="pagination">
          <h5>{pageNumberEnd} of {products.length}</h5>
          <span onClick={() => handlePageChange("prev")} style={{ display : pageNumberStart === 0 && "none" }}>
            <GrFormPreviousLink />
          </span>
          <span onClick={() => handlePageChange("next")} style={{ display : products.length <= pageNumberEnd && "none" }}>
            <GrFormNextLink />
          </span >
        </div>}
      </div>
      <div className="right_sidebar">
        <div className="latest_recipe_container">
          <h3 className="sub_section_title">Latest Product</h3>
          {loading ? (
            <h3 style={{ textAlign: "center" }}>Loading...</h3>
          ) : (
            popularProduct.map((product) => (
              <SmallCard product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
