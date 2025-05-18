import { useState } from "react";
import ProductItem from '../ProductItem';
import './ProductList.css';

function ProductList(args) {  
  const [filter, setFIlter] = useState('')

  function handleFilterChange(event) {
    setFIlter(event.target.value ? event.target.value : '');
    console.log(filter)
  }

  return (
    <div className="product-list">
      <h1>List of products</h1>
      <label>
        Filter by product title:
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
      <ul>
        { args.products.filter((product)=>{ 
          return product.title.includes(filter)
          }).map((product) => <ProductItem id={product.id} title={product.title} brand={product.brand}></ProductItem> )
        }
      </ul>
    </div>
  );
}

export default ProductList;
