import ListCard from "@/components/blog/ListCards";
import { FilterByCategory } from "@/lib/utils";

const ProductPage = async () => {
  const response = await fetch("http://localhost:8000/Cards");
  const data = await response.json()
  const product = FilterByCategory("Product", data);
  
  return (
    <div>
      <h1>Product</h1>
      <p>Product feature launches, stories behind new releases, and tips on how to use 
        Abstract.
      </p>

      <ListCard data={product}/>

      
    </div>
  )
}

export default ProductPage