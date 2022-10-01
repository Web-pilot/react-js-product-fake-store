import {Link} from 'react-router-dom'

const Card = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
        <div className="recipe_items_container">
          <div className="left">
              <img
                src={product.image}
                alt=""
              />
        
          </div>
          <div className="right">
            <h4>{product.category}</h4>
            <h2 className="recipe_title">
             {product.title.slice(0, 20)}...
            </h2>
          
            <p>
                {product.description.slice(0, 100)}...
            </p>
           
            <hr className="item_rule" />
            <span>${product.price}</span> <button className='add_to_cart_btn'></button>
          </div>
        </div>
    </Link>
  )
}

export default Card