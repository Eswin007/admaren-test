import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";


const Searchbar = ({className = '', placeholder=''}) => {
    const [value, setValue] = useState('')
  return (
    <div className={`searchbar ${className}`}>
          <SearchIcon />
          <input
            type="text"
            placeholder={placeholder}
            className="searchbar__input"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
          />
    </div>
  )
}

export default Searchbar