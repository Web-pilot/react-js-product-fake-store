import React from "react";
import { Link } from "react-router-dom";

const SmallCard = ({ product }) => {
  return (
    <div className="flex_box_container">
      <a href="">
        <img src={product.image} alt="" />
      </a>
      <ul className="latest_recipe_list">
        <li>
          <h3>
            <Link to={`/product/${product.id}`}>
              {product.title.slice(0, 10)}... 
            </Link>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default SmallCard;
