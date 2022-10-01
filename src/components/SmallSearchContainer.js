import {
    FaSearch,
  } from "react-icons/fa";
  
const SmallSearchContainer = ({placeholder}) => {
  return (
    <div className="form_group">
        <input type="text" placeholder={placeholder} />
        <span>
          <FaSearch className="search_icon"/>
        </span>
      </div>
  )
}

export default SmallSearchContainer