import React from 'react'
import Card from './Card';
import SearchBar from './SearchBar';

const CardList = ({items, backup, setterList}) => {

  const handleSearch = (e) => {
    if(e.target.value.length > 0) {
        setterList({items: items.filter(d => d.name.toLowerCase().includes(e.target.value.toLowerCase())), backupItems: backup});
    } else {
        setterList({items: backup, backupItems: backup});
    }
  };

  return (
    <>
    <SearchBar search={handleSearch}></SearchBar>
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>

        {
        items?.length > 0 ?
        items.map((prod) => (
            <Card prod={prod} key={prod.id} />
        ))
        : <h5>No hay artículos</h5>}
    </div>
    </>
  )
}

export default CardList