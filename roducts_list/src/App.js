import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

const LIST_URL = 'https://dummyjson.com/products' 


function App() {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    axios.get(LIST_URL).then((resp) => { 
      setProducts(resp.data.products)
    })
  }, [])

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <ProductList products={products} />,
    },
    {
      path: 'details/:id',
      element: <ProductDetails products={products} />,
    },
  ]);

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route 
    //       path="/"
    //       element={<ProductList products={products} />} />
    //     <Route 
    //       path="details/:id"
    //       element={<ProductDetails products={products} />} />
    //   </Routes>
    // </BrowserRouter> 
    <RouterProvider router={myRouter} />
    );
}

export default App;
