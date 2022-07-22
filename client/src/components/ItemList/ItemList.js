import React from 'react';
import { useSelector } from 'react-redux';

// import Item from './Item/Item';

const ItemList = () => {
  const posts = useSelector((state) => state.items);

  console.log(posts);
  return (
    <>
      <h1>ItemList</h1>
    </>
  )
};

export default ItemList;