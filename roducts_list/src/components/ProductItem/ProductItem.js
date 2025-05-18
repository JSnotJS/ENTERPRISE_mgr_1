import React    from "react";

function ProductItem(props) {
  const id = props.id;
  return (
    <li key={id}><a href={"http://localhost:3000/details/"+id}>{props.title}</a>({props.brand})</li>
  );
}

export default ProductItem;
