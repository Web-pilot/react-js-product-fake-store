import React from "react";
import { Link } from "react-router-dom";

const SmallCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex_box_container">
        <img src={product.image} alt="" />

        <ul className="latest_recipe_list">
          <li>
            <h3>{product.title.slice(0, 10)}...</h3>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default SmallCard;
