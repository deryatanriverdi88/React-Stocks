import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <select onChange={props.handleSortButton} >
            <option value="Default">Default</option>
            <option value="Alphabetically">Alphabetically</option>
            <option value="Price">Price</option>
        </select>
      </label>
     
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilterButton}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
