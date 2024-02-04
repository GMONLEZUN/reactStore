import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { category } = useParams();
  const products = [
    { id: 1, name: "Producto A", description: 'descripcion producto A', stock: 11, category: 'catA' },
    { id: 2, name: "Producto B", description: 'descripcion producto B', stock: 55, category: 'catB' },
    { id: 3, name: "Producto C", description: 'descripcion producto C', stock: 9, category: 'catC' },
    { id: 4, name: "Producto D", description: 'descripcion producto D', stock: 25, category: 'catC' },
    { id: 5, name: "Producto E", description: 'descripcion producto E', stock: 30, category: 'catA' },
    { id: 6, name: "Producto F", description: 'descripcion producto F', stock: 90, category: 'catA' },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error('No hay datos'));
    }
  });

  const [prods, setProds] = useState([]);

  useEffect(() => {
    const filterProducts = async () => {
      let data = await getProductos;
      let filteredProducts;
      if (data) {
        if (category) {
          filteredProducts = data.filter(p => p.category === category);
        } else {
          filteredProducts = data;
        }
      }
      setProds(filteredProducts);
    };

    filterProducts().catch(console.error);
  }, [category]); // Fix the dependency array to include 'category' instead of 'prods'

  return (
    <>
      <Center p='1rem'>
        <ItemList productos={prods} />
      </Center>
    </>
  );
};

export default ItemListContainer;
