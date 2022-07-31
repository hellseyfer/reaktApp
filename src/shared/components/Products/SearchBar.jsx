import React from 'react'

const SearchBar = ({search}) => {

    const handleSearch = (e) => {
        search(e);
    };

  return (
    <>
        <input type="text" placeholder="Buscar" onChange={handleSearch} name='busqueda'/>
    </>
  )
}

export default SearchBar