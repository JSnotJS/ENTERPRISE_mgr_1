import { useParams } from "react-router";

function ProductDetails(args) {
    const params = useParams()
    const id = params.id
    console.log(id)
    const selected_items = args.products.filter((i) => {return i.id == id})
    let out = null;
    if (selected_items.length > 0) {
        out = 
        <div>
            <h1>{selected_items[0].title}</h1>
            {selected_items[0].category}<br/>
            {selected_items[0].brand}<br/>
            {selected_items[0].description}<br/>
            {selected_items[0].price}<br/>
            <img src={selected_items[0].thumbnail} alt="haha"/><br/>
            <a href="http://localhost:3000">Powrót</a><br/>
        </div>
    }
    console.log(out)
    return (
        out
    );
}

export default ProductDetails;