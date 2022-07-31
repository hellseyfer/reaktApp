import React from 'react'

const SearchBar = ({handleSearch}) => {

    const search = (e) => {
        console.log(e.target.value);
        handleSearch(e);
    };

  return (
    <>
        <input type="text" placeholder="Buscar" onChange={search}/>
    </>
  )
}

export default SearchBar